
import uniqid             from "uniqid";
import {ADD_NOTIFICATION} from "../Constants/";


export const addNotification = ({message, status}) => (
    {
        type: ADD_NOTIFICATION,
        payload: {
            id: uniqid(),
            status: status,
            message: message
        }
    }
);