import classNames from "classnames";
import React from "react";
import "./style.css";


export const Row = ({children}) => {
    return (
        <div className={classNames('row-memo')}>
            {React.Children.map(children, (child) => {
                return child;
            })}
        </div>
    );
};