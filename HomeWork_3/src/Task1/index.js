import React, {Component}     from "react";
import uniqid         from "uniqid";
import {Toggler, TogglerItem} from "../components/";


export class Task1 extends Component {
    state = {
        data: [
            {
                id: uniqid(),
                activeState: "Male",
                name: "gender",
                items: ["Male", "Female"],
            },
            {
                id: uniqid(),
                activeState: "Center",
                name: "layout",
                items: ["Left", "Center", "Right", "Baseline"],
            }
        ]
    }

    active = ({value, id}) => () => {
        const modState = {...this.state};
        modState.data.map(toggle => {
            if (toggle.id === id) toggle.activeState = value;
            return toggle;
        });
        this.setState({modState});
    }

    render() {
        const {data} = this.state;
        const {active} = this;

        return (
            <>
                <h1>Task 1</h1>
                {
                    data.map(toggle =>
                        <Toggler
                            action={active}
                            id={toggle.id}
                            key={toggle.id}
                            name={toggle.name}
                            activeState={toggle.activeState}
                        >
                            {toggle.items.map(item => 
                            <TogglerItem key={uniqid()} value={item}/>
                            )}
                        </Toggler>
                    )
                }
            </>
        );
    }
}