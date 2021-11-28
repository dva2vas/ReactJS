import React          from "react";
import {useParams}    from "react-router";
import {Link}         from "react-router-dom";

import {useDataFetch} from "../UseDataFetch/useDataFetch";
import {Comments}     from "../Comments/Comments";


export const Post = () => {
    const {postid} = useParams();

    const [post] = useDataFetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
    const [users] = useDataFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useDataFetch(`https://jsonplaceholder.typicode.com/posts/${postid}/comments`);

    return (
        <>
            <h1>Post</h1>
            {
                !post ?
                    <h3> Loading post... </h3> :
                    <div>
                        <h2 className={"posts__list__item-title"}><b>{post.id}.</b> {post.title}</h2>
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
                        <p>{post.body}</p>
                    </div>
            }
            {
                !comments ?
                    <h3> Loading comments... </h3> :
                    <Comments comments={comments}/>
            }
        </>
    );
};