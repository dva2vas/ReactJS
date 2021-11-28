import {
    ADD_TODO, TOGGLE_TODO, REMOVE_TODO,
} from "../Constants";


const initState = {
    data: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                data: state.data.map(todo => {
                    if (todo.id === action.payload) {
                        todo.status = !todo.status;
                    }
                    return todo;
                })
            };
        case REMOVE_TODO:
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;