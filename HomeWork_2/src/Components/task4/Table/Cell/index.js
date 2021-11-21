import React from 'react';
import './style.css'



const Cell = ({children, type, background, color, currency}) => {
    const addCurrency = () => {
        if (currency) {
            return currency
        }
    }
    return (
        <div className={"cell "+type}
            style={{backgroundColor: background, 
                color: (type === 'money') && !currency ? 'red' : color}}
        >

            {children} 
            {type === 'money' ? addCurrency() : <></>}
        </div>
    );
};

Cell.defaultProps = {
    type: 'text',
    cells: 1,
    background: 'transparent',
    color: 'black'
}


export default Cell;