import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../Constants";
import uniqid                               from "uniqid";

export const toggleTodo = (id) => (
    {type: TOGGLE_TODO, payload: id}
);

export const removeTodo = (id) => (
    {type: REMOVE_TODO, payload: id}
);

export const addTodo = (title) => (
    {
        type: ADD_TODO,
        payload: {
            id: uniqid(),
            title,
            status: false
        }
    }
);