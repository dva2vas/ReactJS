import React, { Component } from 'react'
import User from "../User"
import "./style.css"

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    changeInterviewed = (id) => {
        this.setState({
            ...this.state,
            users: this.state.users.map(user =>
                user.id === id ? 
                {...user, interviewed: !user.interviewed
                } : user
            )
        })
    }


 componentDidMount() {
     this.getUser();

 }

    getUser() {
     fetch('https://jsonplaceholder.typicode.com/users')
           .then(res => res.json())
           .then(res =>{
        this.setState({
            users: res
        })
    })
     
    console.log('users',this.state.users);
  }
    

render() {
    const {users} = this.state
    const {changeInterviewed} = this
    return (
        <>
        <div>
            <h2>Task #2</h2>
            <div className='usersList'>
                {
                    users.map(user =>
                        <User key={user.id} 
                              action={changeInterviewed} 
                              user={user}
                        />
                    )
                }
            </div>
            </div>
        </>
    );
}
}        
