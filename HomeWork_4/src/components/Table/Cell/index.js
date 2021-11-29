import React, {memo} from "react";
import classNames  from "classnames";
import "./style.css";


export const Cell = memo(({children, handler }) => {
    console.log("render");
    return (
            <div className='cell-memo'>
                <input onChange={handler} 
                className='cell-memo__input' 
                type="text" value={children}/>
            </div>
    );
}, (prev, next) =>
{
    return prev.children === next.children;
});

Cell.displayName = "Cell";