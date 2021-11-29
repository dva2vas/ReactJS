import React, {useEffect, useState} from "react";
import star                       from "../../assets/star.png";
import starCheck                   from "../../assets/starCheck.png";
import uniqid                       from "uniqid";


export const Rating = ({id}) => {
    const [rating, setRating] = useState(null);

    useEffect(() => {
        try {
            if (id) {
                const photoRating = JSON.parse(localStorage.getItem("PhotoRating")) || [];
                if (photoRating.find((i) => (i.id === id))) {
                    photoRating.map((i) => {
                        if (i.id === id) {
                            if (rating === null) {
                                setRating(i.rating);
                            }
                            i.rating = rating;
                        }
                        return i;
                    });
                } else {
                    photoRating.push({id, rating: 0});
                    setRating(0);
                }
                localStorage.setItem("PhotoRating", JSON.stringify(photoRating));
            }
        } catch (e) {
            console.log(e);
        }

    }, [id, rating]);


    const clickHandler = (value) => () => {
        setRating(value);
    };

    const ratingBtn = () => {
        const arr = [];
        let img = starCheck;
        for (let i = 0; i < 5; i++) {
            if (i >= rating) img = star;
            arr.push(btn({value: i + 1, img}));
        }
        return arr;
    };

    const btn = ({value, img}) => (
            <img
                    key={uniqid()}
                    onDrag={clickHandler(0)}
                    onClick={clickHandler(value)}
                    src={img}
                    alt={""}
                    title={`rating: ${value}\ndrag for set 0`}
                    height={40}
            />
    );

    return (
            <div>
                {ratingBtn().map(i => i)}
            </div>
    );
};