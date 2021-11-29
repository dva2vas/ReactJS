import React, {Component} from "react";
import {Header}           from "../components/Header/Header";
import {Route, Switch}    from "react-router-dom";
import routes             from "../routes_map";
import uniqid             from "uniqid";
import "./style.css";



export class Task1 extends Component {

    render() {
        return (
            <>
                <h1>Tasks lesson 5</h1>
                <div classname="header_div">
                <Header/>
                 </div>
                <Switch>
                    {
                        routes.map(route => (<Route key={uniqid()} {...route}/>))
                    }
                </Switch>
            </>
        );
    }
}