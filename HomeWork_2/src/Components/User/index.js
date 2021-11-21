import React from 'react';
import ButtonFunc from "../Buttons/button.js";
import './style.css'


const User = ({user, action}) => {
    const {id, name, company, address, phone, email, interviewed} = user

    const clickHandler = () => {
        action(id)
    }

    return (
        <>
       <div className ="user"> 
           <div>
                <b>{name}</b><br/>
                Company: <b>{company.name}</b><br/>
                Address: <b>{address.city}</b><br/>
                Contact:<br/>
                <b>{phone}, {email}</b><br/>
            </div> 

             <div>
                <ButtonFunc
                    text={interviewed ? 'interviewed' : 'interview'}
                    style={{
                        width: '180px',
                        backgroundColor: interviewed ? 'green' : 'red'}}
                    action={clickHandler}
                    /><br/>
            </div>
        </div>
        </>
    );
};

export default User;
