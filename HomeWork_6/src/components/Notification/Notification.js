import React                  from "react";
import {useSelector}          from "react-redux";
import {notificationSelector} from "../../selectors";
import {Message}              from "../Message/Message";
import uniqid                 from "uniqid";
import "./style.css";


export const Notification = () => {
    const notification = useSelector(notificationSelector);

    return (

        <div className="notification-l6">
            {
                notification.map(item => (<Message key={uniqid()} item={item}/>))
            }
        </div>
    );
};