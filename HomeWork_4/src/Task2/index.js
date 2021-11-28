import React, {Component} from "react";
import {ThemeContext}     from "../components/";
import {ChangeTheme}      from "../components/ChangeTheme/ChangeTheme";

export class Task2 extends Component {
    state = {
        theme: "light"
    }

    changeTheme = (theme) => {
        this.setState({theme});
    }

    render() {
        const {theme} = this.state;
        const {changeTheme} = this;

        return (
            <>
                <h1>Task 2</h1>
                <ThemeContext.Provider value={{theme, changeTheme}}>
                    <ChangeTheme/>
                </ThemeContext.Provider>
            </>
        );
    }
}