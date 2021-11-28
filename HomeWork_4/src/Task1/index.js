import React, {Component} from "react";
import {Canvas} from "../components/";
import country from "../Task1/listCountry.json";


export class Task1 extends Component {

    render() {
        return (
            <>
                <h1>Task 1</h1>
                <Canvas
                    count={3}
                    dynamic={false}
                    lineNames={country}
                    chartName={"COUNTRY RANKING"}
                    labelsTypes={"number"}
                    interval={1000}
                    data={{
                        labels: [1945, 1955, 1965, 1975, 1985, 1995, 2005, 2015, 2025, 2035, 2045],
                        datasets: []
                    }}
                />

                <Canvas/>
            </>
        );
    }
}