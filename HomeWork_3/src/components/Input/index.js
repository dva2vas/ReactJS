import React from "react";
import {PropTypes} from "prop-types";
import classNames from "classnames";
import "./style.css";


export const Input = ({name, type, placeholder, value, handler, 
                      valueLength, valueMaxLength, theme}) => {
    return (
            <label className='input'>
                <div className='input__label'>{name}</div>

                <input
                        className={classNames("input__field", {valid: value}, theme)}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={handler}
                        maxLength={valueMaxLength}
                        max={valueMaxLength}
                        min={1}
                />
                {
                    valueLength ?
                            <span className='input__helper'>
                                Content length: {value.length} of {valueMaxLength}
                            </span> :
                            <></>
                }
            </label>

    );
};

Input.propTypes = {
    type: PropTypes.oneOf([
        "text",
        "password",
        "number"
    ]).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.any
    ]),
    handler: PropTypes.func.isRequired,
    valueLength: PropTypes.bool,
    valueMaxLength: PropTypes.number
};

//export default Input;