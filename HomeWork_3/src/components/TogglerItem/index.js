import React from "react";
import classNames from "classnames";
import {PropTypes} from "prop-types";

export const TogglerItem = ({children, value, active, action}) => {
    return (
            <button
                    className={classNames("toggle__item", {active: active})}
                    type="button"
                    onClick={action}
            >
                {children || value}
            </button>
    );
};

TogglerItem.propTypes = {
    action: PropTypes.func,
    active: PropTypes.bool,
    value: PropTypes.string,
    children: PropTypes.string
};
