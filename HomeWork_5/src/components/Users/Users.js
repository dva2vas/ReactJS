import React          from "react";
import uniqid         from "uniqid";
import {Link}         from "react-router-dom";
import {useDataFetch} from "../UseDataFetch/useDataFetch";


export const Users = () => {
    const [users] = useDataFetch("https://jsonplaceholder.typicode.com/users");

    return (<>
        <h1>Users</h1>
        <div className={"albums__list"}>
            {
                !users ? <h2 className={"albums__list-loading"}> Loading... </h2> :
                    users.map(user => (
                        <div key={uniqid()} className={"photo__list__item"}>
                            <h3 className={"photo__list__item-title"}><b>{user.id}.</b> {user.username}</h3>
                            <p>
                                <b>Name: {user.name}</b><br/>
                                <b>Email: {user.email}</b>
                            </p>
                            <div>
                                <Link key={uniqid()} to={`../users/${user.id}/posts`}>
                                    Posts details...
                                </Link><br/>
                                <Link key={uniqid()} to={`../users/${user.id}/albums`}>
                                    Albums details...
                                </Link>
                            </div>
                        </div>
                    ))
            }
        </div>
    </>);
};