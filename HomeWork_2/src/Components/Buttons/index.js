import React from 'react'

import ButtonFunc from "./button"  
import './style.css'

const DemoFuncButton =()=>{
    return (
        <div>
            <h2>Task #1</h2>
           <ButtonFunc
              text ="BUTTON_1"
              style={{backgroundColor: 'blue'}}
              action={() => {console.log('Click button 1') }}
            /> 
           <ButtonFunc
              text ="BUTTON_2"
              style={{backgroundColor: 'yellow'}}
              action={() => {console.log('Click button 2') }}
            />    
             <ButtonFunc
              text ="BUTTON_3"
              style={{backgroundColor: 'green'}}
              action={() => {console.log('Click button 3')}}
            />    
             <ButtonFunc
              style={{backgroundColor: 'white'}}
              action={() => {console.log('Hello world')}}
            />                           
        </div>
    )
}

export default DemoFuncButton;