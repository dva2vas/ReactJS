import React       from "react";
import {PropTypes} from "prop-types";
import "./style.css";
import classNames  from "classnames";


export const Toggler = ({name, children, action, activeState, id, theme}) => {
    return (
            <div className={classNames("toggle", theme)}>
                <b className='toggle__title'>{name}</b>
                <div>
                    {
                        React.Children.count(children) > 0 &&
                        React.Children.map(children, (item) => {
                            if (React.isValidElement(item)) {
                                return React.cloneElement(
                                        item, {
                                            active: item.props.value === activeState,
                                            action: action({
                                                value: item.props.value,
                                                id
                                            })
                                        }
                                );
                            }
                        })
                    }
                </div>
            </div>
    );
};

Toggler.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    activeState: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element)
};