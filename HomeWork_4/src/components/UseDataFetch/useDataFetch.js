import {useEffect, useState} from "react";


export const useDataFetch = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
                .then(res => res.json())
                .then(res => {
                    setData(res);
                });

    }, [url]);

    return [
        data,
        setData
    ];
};