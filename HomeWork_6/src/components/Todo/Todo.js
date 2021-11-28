import React, {useEffect, useRef, useState} from "react";
import uniqid                               from "uniqid";
import {useSelector, useDispatch}           from "react-redux";
import {addTodo, addNotification}           from "../../actions";
import {TodoItem}             from "../../components/TodoItem/TodoItem";
import {Notification}             from "../../components/Notification/Notification";
import {SUCCESS, WARNING}                   from "../../Constants";
import "./style.css";


const Todo = ({selector}) => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const list = useSelector(selector);

    useEffect(() => {
        inputRef.current.focus();
    });

    const titleHandler = (e) => setTitle(e.target.value);

    const onAddTodo = () => {
        const trimTitle = title.trim();
        if (!trimTitle.length) {
            dispatch(addNotification({
                message: "Title empty!",
                status: WARNING
            }));
            setTitle("");
            return;
        }

        dispatch(addTodo(trimTitle));
        dispatch(addNotification({
            message: `Todo created: "${trimTitle}"`,
            status: SUCCESS
        }));
        setTitle("");
    };

    return (
        <div className={"todo"}>
            <>
                <form className={"todo__header"}>
                    <input className={"todo__input"}
                           onSubmit={onAddTodo}
                           ref={inputRef}
                           type="text"
                           value={title}
                           placeholder={"Todo title"}
                           onChange={titleHandler}/>
                    <button className={"todo__btn todo__btn-add"} onClick={onAddTodo}>
                        Add
                    </button>
                </form>
            </>
            {
                list.length ?
                    list.map((item, index) => (<TodoItem key={uniqid()} item={item} index={index + 1}/>)) :
                    <div className={"todo__helper"}>No todos</div>
            }
            <Notification/>
        </div>
    );
};

export default Todo;