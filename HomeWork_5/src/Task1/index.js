/* import React, {Component} from "react";

import {BrowserRouter, Route} from "react-router-dom";
import { Switch } from "react-router";

import uniqid  from "uniqid";

import routes  from "../routes_map";
import {Header} from "../components/Header/Header"; */


import React, {Component} from "react";
import {Header}           from "../components/Header/Header";
import {Route, Switch}    from "react-router-dom";
import routes             from "../routes_map";
import uniqid             from "uniqid";



export class Task1 extends Component {

    render() {
        return (
            <>
                <h1>Task 1-3</h1>
                <Header/>
              
                <Switch>
                    {
                        routes.map(route => (<Route key={uniqid()} {...route}/>))
                    }
                </Switch>
             
            </>
        );
    }
}