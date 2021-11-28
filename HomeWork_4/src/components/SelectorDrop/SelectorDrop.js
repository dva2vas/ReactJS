import React from "react";
import classNames from "classnames";
import {PropTypes} from "prop-types";


export const SelectorDrop = ({children, value, action, btnRef}) => {
    return (
        <button
            ref={btnRef}
            className={classNames("selector__item drop")}
            type="button"
            onClick={action}
        >
            {children || value} ▼
        </button>
    );
};

SelectorDrop.propTypes = {
    action: PropTypes.func,
    active: PropTypes.bool,
    value: PropTypes.string,
    children: PropTypes.string
};
