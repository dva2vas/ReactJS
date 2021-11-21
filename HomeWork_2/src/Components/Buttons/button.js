import React from 'react';

const ButtonFunc = ({text,style,action}) =>{

 const btnClick = () =>{
       action()
 }

    return (
       <button style={style}  onClick={btnClick}> {text} 
       </button>
    )



}

ButtonFunc.defaultProps = {
   text : 'BUTTON *'
}
export default ButtonFunc;