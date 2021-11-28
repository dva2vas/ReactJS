import React, {Component, createRef} from "react";
import Chart from "chart.js/auto";
import {PropTypes} from "prop-types";
import classNames from "classnames";
import "./style.css";


export class Canvas extends Component {
    state = {
        ...this.props
    }
    chartRef = createRef()

    componentDidMount() {
        const {data, chartName, type, run} = this.state;
        const ctx = this.chartRef.current.getContext("2d");
        this.setState({
            labelsLength: data.labels.length,
            defaultLabels: [...data.labels]
        });
        this.chart = new Chart(ctx, {
            type,
            data,
            options: {
                elements: {
                    line: {
                        tension: 0.4
                    }
                },
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: chartName,
                        color: "#000000",
                    }
                }
            },
        });
        this.randomizeData();
        if (run) this.start();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    randomizeColor = () => {
        let color = [];
        for (let i = 0; i < 3; i++) color.push(Math.floor(Math.random() * 50)*2);
        return `rgb(${color.join(", ")})`;
    }

    randomizeCountry = () => {
        const {lineNames} = this.state;
        return lineNames[Math.floor(Math.random() * lineNames.length)];
    }

    randomizeData = () => {
        this.stop();
        const {count} = this.state;
        this.chart.data.datasets.length = 0;

        for (let i = 0; i < count; i++) {
            this.generateLine([0]);
        }
    }

    generateLine = (data) => {
        const {randomizeCountry, randomizeColor} = this;
        const color = randomizeColor();

        this.chart.data.datasets.push({
            label: randomizeCountry(),
            data,
            borderColor: color,
            backgroundColor: color
        });
        this.chart.update();
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    start = () => {
        this.stop();
        this.timer = setInterval(
            () => {
                const {datasets, labels} = this.chart.data;
                const {dynamic, labelsTypes, labelsLength, labelsStep} = this.state;
                datasets.map(line => {
                    let inc = line.data[line.data.length - 1] + this.getRandomInt(-5, 10);
                    if (inc < 0) inc = 0;
                    line.data.push(inc);
                    if (line.data.length > 50) this.setState({dynamic: true});

                    if (line.data.length >= labels.length) {
                        if (!dynamic) {
                            if (labelsTypes === "number") {
                                labels.push(labels[labels.length - 1] + labelsStep);
                            } else if (labelsTypes === "string") {
                                labels.push(labels[labels.length - labelsLength]);
                            }
                        } else {
                            if (labelsTypes === "number") {
                                line.data.shift();
                                labels.shift();
                                labels.push(labels[labels.length - 1] + labelsStep);
                            } else if (labelsTypes === "string") {
                                line.data.shift();
                                labels.push(labels.shift());
                            }
                        }
                    }
                    return line;
                });
                this.chart.update();
            },
            this.state.interval);
        this.setState({
            run: true
        });
    }

    stop = () => {
        clearInterval(this.timer);
        this.setState({
            run: false
        });
    }

    inputHandler = (e) => {
        this.setState({
            count: e.target.value
        });
        this.generateLine(
            Array.from(
                {length: this.chart.data.datasets[0].data.length},
                () => 0
            )
        );
    }

    intervalHandler = (e) => {
        this.stop();
        this.setState({
            interval: e.target.value
        });
    }

    dynamicHandler = () => {
        const {dynamic} = this.state;
        this.setState({
            dynamic: !dynamic
        });
    }

    resetData = () => {
        this.stop();
        this.setState({count: 1});
        this.chart.data.labels = [...this.state.defaultLabels];
        this.chart.data.datasets.length = 1;
        this.chart.data.datasets[0].data = [0];
        this.chart.update();
    }

    refresh = () => {
        this.stop();
        this.start();
    }

    render() {
        const {inputHandler, intervalHandler, randomizeData, chartRef, start, stop, dynamicHandler, resetData} = this;
        const {count, interval, dynamic, run} = this.state;
        return (
            <div className='chart__container'>
                <div className={classNames("chart__indicator", run ? "run" : "stop")}>
                    {run ? "RUN" : "STOP"}
                </div>
                <canvas ref={chartRef} width={800} hidden={800}>
                </canvas>
                <div className='chart__footer'>
                    <label className='input chart'>
                        <div className='input__label chart'>Number of lines</div>
                        <input className='input__field chart' onChange={inputHandler}
                               min={count} value={count} type="number"/>
                    </label>

                    <label className='input chart'>
                        <div className='input__label chart'>Interval</div>
                        <input className='input__field chart' onChange={intervalHandler}
                               min={500} value={interval} step={200} type="number"/>
                    </label>

                    <button className='custom-btn chart randomize' type="button" onClick={randomizeData}>
                        Randomize
                    </button>
                    {run
                        ?
                        <button className='custom-btn chart stop' type="button" onClick={stop}>
                            Stop
                        </button>
                        :
                        <button className='custom-btn chart start' type="button" onClick={start}>
                            Start
                        </button>
                    }

                    <button className='custom-btn chart static' type="button" onClick={dynamicHandler}>
                        {!dynamic ? "Dynamic" : "Static"}
                    </button>

                    <button className='custom-btn chart' type="button" onClick={resetData}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}


Canvas.propTypes = {
    type: PropTypes.oneOf([
        "line",
        "bar",
        "bubble",
        "doughnut",
        "scatter",
        "pie",
        "polarArea",
        "radar"
    ]),
    chartName: PropTypes.string,
    labelsTypes: PropTypes.oneOf([
        "number",
        "string",
    ]),
    defaultLabels: PropTypes.array,
    labelsLength: PropTypes.number,
    labelsStep: PropTypes.number,
    count: PropTypes.number,
    run: PropTypes.bool,
    dynamic: PropTypes.bool,
    lineNames: PropTypes.arrayOf(
        PropTypes.string
    ),
    data: PropTypes.shape({
            labels: PropTypes.array,
            datasets: PropTypes.arrayOf(
                PropTypes.shape({
                    data: PropTypes.arrayOf(PropTypes.number),
                    label: PropTypes.string
                })
            )
        }
    ),
    interval: PropTypes.number
};

Canvas.defaultProps = {
    type: "line",
    count: 1,
    run: false,
    dynamic: true,
    lineNames: ["LineName"],
    chartName: "ChartName",
    labelsTypes: "string",
    defaultLabels: [],
    labelsLength: 0,
    labelsStep: 10,
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            data: [0, 4, 6, 22, 14, 19, 88, 16],
            label: "LineName",
            borderColor: "blue",
            backgroundColor: "blue"
        }],
        defaults: {
            color: "#000000",
            borderColor: "#000000"
        }
    },
    interval: 50
};