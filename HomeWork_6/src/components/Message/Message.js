import React, {useEffect, useRef} from "react";
import classNames                 from "classnames";
import {REMOVE_NOTIFICATION, INFO, SUCCESS, WARNING, ERROR} from "../../Constants";
import {useDispatch}         from "react-redux";


export const Message = ({item}) => {
    const dispatch = useDispatch();
    let timerRef = useRef();
    const removeNotification = (id) => () => dispatch({type: REMOVE_NOTIFICATION, payload: id});

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            removeNotification(item.id)();
        }, 2000);
        return () => clearTimeout(timerRef);
    });

    return (
        <div
            key={item.id}
            onClick={removeNotification(item.id)}
            className={classNames(
                "notification-l6__item",
                {"notification-l6__item-info": item.status === INFO},
                {"notification-l6__item-success": item.status === SUCCESS},
                {"notification-l6__item-warning": item.status === WARNING},
                {"notification-l6__item-error": item.status === ERROR}
            )}>
            {item.message}
        </div>
    );
};