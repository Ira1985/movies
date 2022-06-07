import React, {Component} from "react";
import "./user.scss"
import {movieService} from "../../../services/movies.service";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

class User extends Component{
    constructor(props) {
        super(props)
        this.state ={
            openMenu: false,
        }
    }
    toggleMenu = () => {
        this.setState(prevState => ({
            openMenu: !prevState.openMenu
        }))
    }
    logout = async () => {
        const session_id = localStorage.getItem('session_id');
        try {
            const data = await movieService.deleteSession({ session_id })
            console.log('data', data)
            this.props.updateUser(null)
        } catch (e) {
            console.log('error', e)
        }
    }
    render() {
        const {user} = this.props
        const {openMenu} = this.state
        return (
            <div className="user">
                <p  className="user__name">{user.name}</p>
                <Dropdown toggle={this.toggleMenu} isOpen={openMenu}>
                    <DropdownToggle>
                        <img className="user__image" src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s-64"`}/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={this.logout}>Выйти</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default User
