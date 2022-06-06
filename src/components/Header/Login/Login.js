import React, {Component} from "react";
import "./login.scss"
import {movieService} from "../../../services/movies.service";
import FormField from "../../Interface/FormField/FormField";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                login: {
                    value: '',
                    text: 'Пользователь',
                    type: 'text'
                },
                password: {
                    value: '',
                    text: 'Пароль',
                    type: 'password'
                },
            },
            errors: {
                backend: null
            },
            submiting: false
        }
    }

    async createNewSessionId() {
        const {fields: {login, password}} = this.state
        try {
            const data = await movieService.createRequestToken()
            const {request_token} = await movieService.validateWithLogin({
                username: login.value,
                password: password.value,
                request_token: data.request_token
            })
            const {session_id} = await movieService.createSession({
                request_token: request_token
            })
            localStorage.setItem('session_id', session_id)
            const user = await movieService.getUser({
                session_id
            })
            this.props.updateUser(user)
            this.props.toggleModal()
        } catch (e) {
            const {response: {data: {status_message}}} = e
            this.setState(prevState => (
                {
                    errors: {
                        ...prevState.errors,
                        backend: status_message
                    },
                    submiting: false
                }
            ))
        }
    }
    handleText = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevState => {
            const newValue = {
                ...prevState.fields[name],
                value
            }
            return {
                fields: {
                    ...prevState.fields,
                    [name]: newValue
                },
                errors: {
                    ...prevState.errors,
                    [name]: null,
                    backend: null
                }
            }
        })
    }
    onSubmit(e) {
        const {fields} = this.state
        this.setState(prevState => (
            {
                errors: {
                    ...prevState.errors,
                    backend: null
                },
                submiting: true
            }
        ))
        e.preventDefault()
        const validFieldsForm = Object.keys(fields).map(field => this.validateFields(field))
        if (!validFieldsForm.includes(false)) {
            this.createNewSessionId()
        }
    }
    validateFields = (name) => {
        if (!this.state.fields[name].value.length) {
            this.setState(prevState => (
                {
                    errors: {
                        ...prevState.errors,
                        [name]: 'Not empty'
                    },
                    submiting: false
                }
            ))
            return false
        }
        return true
    }
    onBlur = (e) => {
        const name = e.target.name
        this.validateFields(name)
    }
    render() {
        const {fields, errors, submiting} = this.state
        return (
            <>
                <h3 className='login-form__header'>Авторизация</h3>
                {!errors.backend || <p className='login-form__errors'>{errors.backend}</p>}
                <form className='login-form'>
                    {Object.keys(fields).map(key => (
                        <FormField
                            name={key}
                            key={fields[key].text}
                            value={fields[key].value}
                            type={fields[key].type}
                            labelText={fields[key].text}
                            error={errors[key]}
                            onChange={this.handleText}
                            onBlur={this.onBlur}
                        />
                    ))}
                    <button
                        className='login-form__button'
                        type='submit'
                        onClick={(e) => this.onSubmit(e)}
                        disabled={submiting}
                    >Войти</button>
                </form>
            </>
        )
    }
}

export default Login
