import React, {Component} from 'react';
import loader from "../task3/three-dots.svg";
import "../task3/style.css";



class LoaderImg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            img: new Image(),
            src: props.src,
            title: props.title
        }
    }

    handleImageLoaded = () => {
        this.setState({
            ...this.state,
            timer: setTimeout(() => {
                this.setState({
                    ...this.state,
                    loading: false,
                    title :""
                })
            }, 2000)
        })
    }

    handleImageErrored = () => {
        this.setState({
            ...this.state,
            timer: setTimeout(() => {
                this.setState({
                    ...this.state,
                    loading: false,
                    title : "",
                    loadStatus: "image not load"
                })
            }, 6000)
        })
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            img: {
                ...this.state.img,
                src: this.state.src,
            }
        })
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer)
    }

    render() {
        const {loading, title, loadStatus, img} = this.state
        const {handleImageLoaded, handleImageErrored} = this
        console.log(loadStatus);
        return (
            <>
            <h2>Task #3</h2>
            <div className='loading'>
                <h3>{title}</h3>
                <img hidden={!loading} src={loader} width="100" alt="loading"/>
            
            {loadStatus ? loadStatus
                        : <img
                        onLoad={handleImageLoaded}
                        onError={handleImageErrored}
                        hidden={loading}
                        src={img.src}
                        title={title}
                        alt={title}
                         />} 
            </div>
            </>
        )
    }
}

export default LoaderImg;