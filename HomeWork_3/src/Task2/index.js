import React, {Component} from "react";
import uniqid from 'uniqid';
import {Input} from "../components";


export class Task2 extends Component {
    state = {
        data: [
            {
                id: uniqid(),
                name: "Login",
                type: "text",
                placeholder: "Login",
                value: "",
                contentLength: true,
                contentMaxLength: 20,
            },
            {
                id: uniqid(),
                name: "Password",
                type: "password",
                placeholder: "Password",
                value: "",
                contentLength: true,
                contentMaxLength: 20,
            } ,
            {
                id: uniqid(),
                name: "Age",
                type: "number",
                placeholder: "Age",
                value: "",
                contentLength: false,
                contentMaxLength: 150,
            }/*,
            {
                id: uniqid(),
                name: "Month",
                type: "number",
                placeholder: "Month",
                value: "",
                contentLength: false,
                contentMaxLength: 12,
            },
            {
                id: uniqid(),
                name: "Day",
                type: "number",
                placeholder: "Day",
                value: "",
                contentLength: false,
                contentMaxLength: 31,
            } */
        ]
    }

    handler = id => e => {
        const modState = {...this.state};
        modState.data.map(input => {
            if (input.id === id) {
                if (input.type === "number") {
                    if (e.target.value > input.contentMaxLength) {
                        input.value = input.contentMaxLength;
                    } else {
                        input.value = e.target.value;
                    }
                } else {
                    input.value = e.target.value;
                }
            }
            return input;
        });
        this.setState({modState});
    }

    render() {
        const {handler} = this;
        const {data} = this.state;

        return (
            <>
                <h1>Task 2</h1>
                {
                    data.map(input =>
                        <Input
                            key={input.id}
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            value={input.value}
                            handler={handler(input.id)}
                            contentLength={input.contentLength}
                            contentMaxLength={input.contentMaxLength}
                        />
                    )
                }
            </>
        );
    }
}