import React          from "react";
import {Link}         from "react-router-dom";

import uniqid         from "uniqid";
import {useDataFetch} from "../UseDataFetch/useDataFetch";
import {Rating}       from "../Rating/Rating";
import {useParams}    from "react-router";


export const Photos = () => {
    const {albumsid} = useParams();
    const [posts] = useDataFetch(`https://jsonplaceholder.typicode.com/albums/${albumsid}/photos`);

    return (<>
        <h1>Photos</h1>
        <div className={"post__list"}>
            {
                !posts ? <h2 className={"post__list-loading"}> Loading... </h2> :
                    posts.map(post => (
                        <div key={uniqid()} className={"post__list__item"}>
                            <h3 className={"post__list__item-title"}><b>{post.id}.</b> {post.title}</h3>
                            <Rating id={post.id}/>
                            <img height={150} src={post.thumbnailUrl} alt=""/>
                            <div>
                                <Link key={post.id} to={`/lesson/5/photos/${post.id}`}>
                                    details...
                                </Link>
                            </div>
                        </div>
                    ))
            }
        </div>
    </>);
};