import React          from "react";
import {useDataFetch} from "../UseDataFetch/useDataFetch";
import {dataParse}    from "../../libs/dataParse";


export const JSONPlaceholder = ({data}) => {
    const {url, type} = data;
    const [posts] = useDataFetch(url);

    return (
        <div className={"column"}>
            <h2 style={{textAlign: "center"}}>{type.toUpperCase()}</h2>
            {
                posts ? dataParse({type, posts}) : <h3>Loading...</h3>
            }

        </div>
    );
};