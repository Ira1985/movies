import React, {Component} from "react";
import "./user.scss"

class User extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        const {user} = this.props
        return (
            <div className="user">
                <p  className="user__name">{user.name}</p>
                <img className="user__image" src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s-64"`}/>
            </div>
        )
    }
}

export default User