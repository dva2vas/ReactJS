import React          from "react";
import uniqid         from "uniqid";

import {useParams}    from "react-router";
import {Link}         from "react-router-dom";

import {useDataFetch} from "../UseDataFetch/useDataFetch";



export const Albums = () => {
    let {usersid} = useParams();
    let url;
    if (usersid) {
        url = `https://jsonplaceholder.typicode.com/users/${usersid}/albums`;
    } else {
        url = "https://jsonplaceholder.typicode.com/albums";
    }

    const [albums] = useDataFetch(url);
    const [users] = useDataFetch("https://jsonplaceholder.typicode.com/users");

    return (<>
        <h1>Albums</h1>
        <div className={"albums__list"}>
            {
                !albums ? <h2 className={"albums__list-loading"}> Loading... </h2> :
                    albums.map(post => (
                        <div key={uniqid()} className={"photo__list__item"}>
                            <h3 className={"photo__list__item-title"}><b>{post.id}.</b> {post.title}</h3>
                            <div>
                                <Link key={post.id} to={`/lesson/5/users/${post.userId}`}>
                                    {!users ?
                                        <h3> Loading author... </h3> :
                                        users.map((i) => {
                                            if (i.id === post.userId) {
                                                return `Author: ${i.username}`;
                                            }
                                            return false;
                                        })}
                                </Link><br/>
                                <Link key={uniqid()} to={`/lesson/5/albums/${post.id}/photos`}>
                                    details...
                                </Link>
                            </div>
                        </div>
                    ))
            }
        </div>
    </>);
};