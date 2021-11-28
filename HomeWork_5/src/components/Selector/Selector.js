import React, {useState, useRef} from "react";
import classNames from "classnames";

import uniqid  from 'uniqid';
import {PropTypes}  from "prop-types";
import { SelectorDrop } from "../SelectorDrop/SelectorDrop";

import "./style.css";


export const Selector = ({name, children, action, activeState, id}) => {
    const btnRef = useRef();
    const titleRef = useRef();
    const [show, setShow] = useState(false);

    const changeShow = () => {
        setShow(!show);
    };

    const compose = (f, g) => {
        return function (x) {
            return f(g(x));
        };
    };

    return (
        <div className={classNames("selector")}>
            <div ref={titleRef}>
                <div className='selector__title'>{name}</div>
                <SelectorDrop btnRef={btnRef} key={uniqid()} action={changeShow}>
                    {activeState}
                </SelectorDrop>
            </div>
            <div style={
                {
                    marginTop: titleRef.current && btnRef.current ?
                        titleRef.current.offsetHeight :
                        "auto"
                }
            }
                 className={"selector__list"}>
                {
                    React.Children.count(children) > 0 &&
                    React.Children.map(children, (item) => {
                        if (React.isValidElement(item)) {
                            return React.cloneElement(
                                item, {
                                    width: btnRef.current ? btnRef.current.offsetWidth : "auto",

                                    show,
                                    active: item.props.value === activeState,
                                    action: compose(action({
                                        value: item.props.value,
                                        id
                                    }), changeShow)
                                }
                            );
                        }
                    })
                }
            </div>
        </div>
    );
};

Selector.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    activeState: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element)
};