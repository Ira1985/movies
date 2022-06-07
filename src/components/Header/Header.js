import React, {Component} from "react";
import "./header.scss"
import {Modal, ModalBody} from "reactstrap";
import Login from "./Login/Login";
import User from "./User/User";
import {movieService} from "../../services/movies.service";

class Header extends Component{
    constructor() {
        super();
        this.state = {
            openModal: false,
            user: null
        }
    }

    async componentDidMount() {
        const session_id = localStorage.getItem('session_id')
        if(session_id) {
            const user = await movieService.getUser({
                session_id
            })
            this.updateUser(user)
        }
    }

    toggleModal = () => {
        this.setState((state) => ({
            openModal: !state.openModal
        }))
    }

    updateUser = (user) => {
        this.setState((state) => ({
            user
        }))
    }

    render() {
        const {openModal, user} = this.state
        return (
            <div className="header">
                {user ? <User user={user} updateUser={this.updateUser}/> : <button className="header__login-button" onClick={() => this.toggleModal()}>Войти</button>}
                <Modal
                    isOpen={openModal}
                >
                    <ModalBody>
                        <Login toggleModal={this.toggleModal} updateUser={this.updateUser}/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Header
