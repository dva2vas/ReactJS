import React        from "react";
import {Link}       from "react-router-dom";
import routes       from "../../routes_map";
import {useHistory} from "react-router";


export const Header = () => {
    const history = useHistory();
    const clickHandler = () => {
        history.goBack();
    };
    return (
            <>
                <ul className='header__list'>
                    {
                        routes.map(route => {
                            if (route.title) {
                                return (
                                        <li className='header__list__item' key={route.path}>
                                            <Link className='header__list__item__link' 
                                            to={{pathname: route.path}}>
                                                {route.title}
                                            </Link>
                                        </li>
                                );
                            }
                            return null;
                        })
                    }
                </ul>
                <div style={{width: "100%"}}>
                    <button onClick={clickHandler} className={"btnMenu"}>back</button>
                </div>
            </>
    );
};