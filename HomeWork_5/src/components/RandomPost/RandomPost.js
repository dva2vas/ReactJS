import React          from "react";

import { Redirect }    from "react-router-dom";
import {useDataFetch} from "../UseDataFetch/useDataFetch";


export const RandomPost = () => {
    const [posts] = useDataFetch("https://jsonplaceholder.typicode.com/posts");

    const randomPost = () => {
        return Math.floor(Math.random(posts) * 100);
    };
        return (posts ? <h3>Randomize post...</h3> : <Redirect to={`/posts/${randomPost()}`}/>); 
};