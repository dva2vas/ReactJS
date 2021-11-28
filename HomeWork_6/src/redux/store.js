import {createStore, applyMiddleware, compose} from "redux";
import thunk                                   from "redux-thunk";
import {saveState, loadState}                  from "../helpers/localStorage";
import reducer                                 from "../reducers/";


const middlewares = applyMiddleware(
    thunk,
);

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const preloadedData = loadState("application_data");

let store = createStore(
    reducer,
    preloadedData || {},
    composeEnhancers(middlewares)
);

store.subscribe(() => {
    const state = store.getState();
    saveState("application_data", {
        todos: state.todos,
        notification: state.notification
    });
});


export default store;