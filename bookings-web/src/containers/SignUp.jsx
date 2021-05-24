import React, { Component } from 'react';
import { createUser } from '../services/userApi';
import UserSignUp from '../components/signUp/UserSignUp';

export default class SignUp extends Component {
    state = {
        newUser: {
            username: '',
            email: '',
            password: ''
        }
    }

    handelUsernameChange = ({ target }) => {
        this.setState({ newUser: target.value })
    }


    handelSubmit = async (e, newUser) => {
        e.preventDefault();

        await createUser(newUser);
    }

    render() {
        console.log(this.state.newUser);
        return (
            <>
                <UserSignUp
                    newUser={this.state.newUser}
                    onSubmit={this.handelSubmit}
                    onUserChange={this.handelUsernameChange}
                />
            </>
        )
    }
}
