import React, { Component } from 'react'
import './post.css';

class Post extends Component {

    state = {
        likes: true
    }

    addLike = () => {
        this.setState({
            likes: !this.state.likes
        });
    }

    render = () => {
        const { addLike } = this;
        const { likes } = this.state;
        const { name, company, phone, address } = this.props;

        return (
            <>
                <div className="guest_info">
                    <div id="block_txt" style={likes ? { backgroundColor: "#e2e1ff" } : { backgroundColor: "bisque" }}>
                        <span> Гость <b> {name} </b> работает в компании <b> "{company}" </b>;<br></br>
                            Его контакты:  <b> {phone}; </b><br /><b> {address} </b>            </span>
                    </div>
                    <div id="block_btn">
                        <button className="btn" onClick={addLike} > {likes ? "Отсутствует" : "Прибыл"} </button>
                    </div>
                </div>
            </>
        );
    }

}


export default Post;