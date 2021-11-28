import React, {Component}            from "react";
import uniqid from 'uniqid';
import {Input, Toggler, TogglerItem} from "../components/";
import "./style.css";


export class Task3 extends Component {
    state = {
        input: {
            name: {
                id: uniqid(),
                name: "Name",
                type: "text",
                placeholder: "Name",
                value: "",
                valueLength: true,
                valueMaxLength: 20,
            },
            password: {
                id: uniqid(),
                name: "Password",
                type: "password",
                placeholder: "Password",
                value: "",
                valueLength: true,
                valueMaxLength: 20,
            },            
            age: {
                id: uniqid(),
                name: "",
                type: "number",
                placeholder: "Age",
                value: "",
                valueLength: false,
                valueMaxLength: 150,
            },
            language: {
                id: uniqid(),
                name: "Language",
                type: "text",
                placeholder: "Language",
                value: "",
                valueLength: false,
                valueMaxLength: 20,
            }

        },
        toggle: {
            gender: {
                id: uniqid(),
                activeState: "Male",
                name: "gender",
                items: ["Male", "Female"],
            },
            layout: {
                id: uniqid(),
                activeState: "Left",
                name: "layout",
                items: ["Left", "Center", "Right", "Baseline"],
            }
        }
    }

    handler = id => e => {
        const modState = {...this.state};
        Object.values(modState.input).map(input => {
            if (input.id === id) {
                if (input.type === "number") {
                    if (e.target.value > input.valueMaxLength) {
                        input.value = input.valueMaxLength;
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

    active = ({value, id}) => () => {
        const modState = {...this.state};
        Object.values(modState.toggle).map(toggle => {
            if (toggle.id === id) toggle.activeState = value;
            return toggle;
        });
        this.setState({modState});
    }


    submitHandler = (e) => {
        e.preventDefault();
        const data = [...e.target];
        const form = {};
        data.forEach(i => {
            if (i.localName === "input") {
                form[i.placeholder.toLowerCase()] = i.value;
            } else if (i.localName === "button" && 
                       i.classList.contains("active") && 
                       i.type === "button") {
                form[i.parentElement.previousSibling.textContent] = i.textContent;
            }
        });
        console.log(form);
        for (const [key, value] of Object.entries(form)) {
            console.log(`${key}: ${value}`);
        }
    }

    render() {
        const {handler, active, submitHandler} = this;
        const {gender, layout} = this.state.toggle;
        const {name, password, age, language} = this.state.input;

        return (
            <>
                <h1>Task 3</h1>
                <form className='form' onSubmit={submitHandler}>
                    <Input
                        key={name.id}
                        name={name.name}
                        type={name.type}
                        placeholder={name.placeholder}
                        value={name.value}
                        handler={handler(name.id)}
                        valueLength={name.valueLength}
                        valueMaxLength={name.valueMaxLength}
                    />
                    <Input
                        key={password.id}
                        name={password.name}
                        type={password.type}
                        placeholder={password.placeholder}
                        value={password.value}
                        handler={handler(password.id)}
                        valueLength={password.valueLength}
                        valueMaxLength={password.valueMaxLength}
                    />
                    <Toggler
                        action={active}
                        id={gender.id}
                        key={gender.id}
                        name={gender.name}
                        activeState={gender.activeState}
                    >
                        {gender.items.map(item => <TogglerItem key={uniqid()} value={item}/>)}
                    </Toggler>

                    <div className='age'>
                        <div className='age__label'>
                            Age
                        </div>
                        <div className='age__input'>
                            <Input
                                key={age.id}
                                name={age.name}
                                type={age.type}
                                placeholder={age.placeholder}
                                value={age.value}
                                handler={handler(age.id)}
                                valueLength={age.valueLength}
                                valueMaxLength={age.valueMaxLength}
                            />
                        </div>
                    </div>

                    <Toggler
                        action={active}
                        id={layout.id}
                        key={layout.id}
                        name={layout.name}
                        activeState={layout.activeState}
                    >
                        {layout.items.map(item => <TogglerItem key={uniqid()} value={item}/>)}
                    </Toggler>

                    <Input
                        key={language.id}
                        name={language.name}
                        type={language.type}
                        placeholder={language.placeholder}
                        value={language.value}
                        handler={handler(language.id)}
                        valueLength={language.valueLength}
                        valueMaxLength={language.valueMaxLength}
                    />
                    <button className='submit' type='submit'>submit</button>
                </form>
            </>
        );
    }
}