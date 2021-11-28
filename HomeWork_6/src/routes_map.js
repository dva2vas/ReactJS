import React                                                from "react";
import Todo                                                 from "./components/Todo/Todo";
import {todoSelector, todoSelectorDone, todoSelectorUndone} from "./selectors";
import {NotFound}                                           from "./components/NotFound/NotFound";


const basename = "/lesson_6/";

const routes = [
    {
        path: `${basename}/`,
        children: <Todo selector={todoSelector}/>,
        exact: true,
    },
    {
        title: "All",
        path: `${basename}/all`,
        children: <Todo selector={todoSelector}/>,
        exact: true,
    },
    {
        title: "Done",
        path: `${basename}/done`,
        children: <Todo selector={todoSelectorDone}/>,
        exact: true
    },
    {
        title: "Undone",
        path: `${basename}/undone`,
        children: <Todo selector={todoSelectorUndone}/>,
        exact: true
    },
    {
        component: NotFound
    }
];

export default routes;