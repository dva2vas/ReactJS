import React  from "react";
import uniqid from "uniqid";


export const Comments = ({comments}) => {
    return (
            <div>
                <b>Comments:</b>
                {comments.map((comment) => {
                    return (
                            <div key={uniqid()}>
                                <hr/>
                                <h4><i>{comment.email}</i></h4>
                                <h4>{comment.name}</h4>
                                <p>{comment.body}</p>
                            </div>
                    );
                })}
            </div>
    );
};