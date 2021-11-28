import React from "react";
import uniqid from "uniqid";


const postsParser = (data) => (
    data.map((i) => (
        <div key={uniqid()}>
            <hr/>
            <h4>{i.title}</h4>
            <p>{i.body}</p>
        </div>
    ))
);

const commentsParser = (data) => (
    data.map((i) => (
        <div key={uniqid()}>
            <hr/>
            <p>
                <b>{i.name}</b><br/>
                <i>{i.email}</i><br/>
                {i.body}
            </p>
        </div>
    ))
);

const albumsParser = (data) => (
    data.map((i) => (
        <div key={uniqid()}>
            <hr/>
            <p><b>{i.title}</b></p>
        </div>
    ))
);

const todosParser = (data) => (
    data.map((i) => (
        <div key={uniqid()}>
            <hr/>
            <p>
                <b>{i.completed ? "✔" : "❌"} - {i.title}</b><br/>
            </p>
        </div>
    ))
);

const photosParser = (data) => (
    data.map((i) => (
        <div key={uniqid()}>
            <hr/>
            <h4>{i.title}</h4>
            <img src={i.thumbnailUrl} alt={i.title}/>
        </div>
    ))
);

const types = [
    {type: "posts", parser: postsParser},
    {type: "comments", parser: commentsParser},
    {type: "albums", parser: albumsParser},
    {type: "todos", parser: todosParser},
    {type: "photos", parser: photosParser}
];

export const dataParse = ({type, posts}) => {
    let parser = types.find(parser => parser.type === type);
    if (parser) {
        return parser.parser(posts);
    } else {
        return <></>;
    }
};