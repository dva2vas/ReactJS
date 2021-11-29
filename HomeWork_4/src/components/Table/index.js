import React from "react";
import classNames  from "classnames";
import "./style.css";


export const Table = ({children, theme}) => {
    return (
        <div className={classNames('table-memo', theme)}>
            
            {React.Children.map(children, child => {
                return React.cloneElement(child);
            })}
        </div>
    );
};

