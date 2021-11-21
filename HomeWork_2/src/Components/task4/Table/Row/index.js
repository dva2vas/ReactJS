import React from 'react';
import './style.css'

const Row = ({children, index, head}) => {
    
    return (
        <div className={(head ? 'head' : 'row')}>
            {React.Children.map(children, (child, i) => {
                if (i === 0 && !head) 
                return React.cloneElement(child, {children: index});
                return child
            })}     
        </div>
    );
};

Row.defaultProps = {
    head: false
}

export default Row;