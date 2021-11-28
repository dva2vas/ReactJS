import React, {useState}                      from "react";
import uniqid                                 from "uniqid";
import {Link}                                 from "react-router-dom";
import {useHistory, useParams}                from "react-router";

import {Selector} from "../Selector/Selector";
import {SelectorItem} from "../SelectorItem/SelectorItem";
import {useDataFetch} from "../UseDataFetch/useDataFetch";


export const Posts = () => {
    let {limit, usersid} = useParams();
    let history = useHistory();
    const [selector, setSelector] = useState(
        {
            id: uniqid(),
            activeState: limit || "100",
            name: "Limit",
            items: ["10", "20", "30", "50", "100"]
        }
    );

    let url;
    if (usersid) {
        url = `https://jsonplaceholder.typicode.com/users/${usersid}/posts`;
    } else {
        url = "https://jsonplaceholder.typicode.com/posts";
        if (limit) url += `?_limit=${limit}`;
    }

    const [posts] = useDataFetch(url);

    const handlerSelector = ({value}) => () => {
        setSelector(value);
        history.push(`/lesson/5/posts/limit/${value}`);
    };

    return (<>
        <h1>Posts</h1>
        {
            usersid ?
                <></> :
                <Selector {...selector} action={handlerSelector}>
                    {selector.items.map(item => <SelectorItem key={uniqid()} value={item}/>)}
                </Selector>
        }

        <div className={"posts__list"}>
            {
                !posts ? <h2 className={"posts__list-loading"}> Loading... </h2> :
                    posts.map(post => (
                        <div key={uniqid()} className={"posts__list__item"}>
                            <h3 className={"posts__list__item-title"}><b>{post.id}.</b> {post.title}</h3>
                            <div>
                                <Link key={uniqid()} to={`/lesson/5/posts/${post.id}`}>
                                    details...
                                </Link>
                            </div>
                        </div>
                    ))
            }
        </div>
    </>);
};