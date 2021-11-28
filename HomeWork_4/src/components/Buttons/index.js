import React from 'react';

export const Button= ({text,style,action}) =>{

 const btnClick = () =>{
       action()
 }

    return (
       <button style={style}  onClick={btnClick}> {text} 
       </button>
    )



}

Button.defaultProps = {
   text : ''
}
export default Button;