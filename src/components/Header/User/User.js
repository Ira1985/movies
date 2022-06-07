import React, {Component} from "react";
import "./user.scss";
import {userMenu} from "../../../constants/userMenu";
import {movieService} from "../../../services/movies.service";
import ContextMenu from "../../Interface/ContextMenu/ContextMenu";

class User extends Component{
    constructor(props) {
        super(props)
    }
    logout = async () => {
        const session_id = localStorage.getItem('session_id');
        try {
            const data = await movieService.deleteSession({ session_id })
            this.props.updateUser(null)
        } catch (e) {
            console.log('error', e)
        }
    }
    bindCallback = (name) => {
        this[name]()
    }
    render() {
        const {user} = this.props
        return (
            <div className="user">
                <p  className="user__name">{user.name}</p>
                <ContextMenu menu={userMenu} bindCallback={this.bindCallback}>
                    <img className="user__image" src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s-64"`}/>
                </ContextMenu>
            </div>
        )
    }
}

export default User
