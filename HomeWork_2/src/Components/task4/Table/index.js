import React from 'react';
import './style.css'


const Table = ({children}) => {
    return (
        <div className='table'>
            {React.Children.map(children, (child, i) => {
                return React.cloneElement(child, {index: i});
            })}
        </div>
    );
};

export default Table;