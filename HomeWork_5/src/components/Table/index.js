import React from "react";
import "./style.css";


export const Table = ({children}) => {
    return (
        <div className='table-memo'>
            {React.Children.map(children, child => {
                return React.cloneElement(child);
            })}
        </div>
    );
};

export * from "./Cell"
export * from "./Row"