import {combineReducers} from "redux";
import todos             from "./todos";
import notification      from "./notification";


const reducer = combineReducers({
    todos,
    notification
});

export default reducer;