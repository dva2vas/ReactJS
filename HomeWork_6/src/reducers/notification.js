import {
    ADD_NOTIFICATION, INFO, REMOVE_NOTIFICATION
}             from "../Constants";
import uniqid from "uniqid";

const initState = {
    data: [
        {
            id: uniqid(),
            message: "Welcome user!",
            status: INFO
        }
    ],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                data: state.data.filter(popup => popup.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;