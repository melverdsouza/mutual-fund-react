import React from 'react';

import { Input, Button } from 'antd';
import fire from './config/fire';
const { TextArea } = Input;

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email:'',
            password:''
        }
        this.enterEmail = this.enterEmail.bind(this)
        this.enterPassword = this.enterPassword.bind(this)
        this.login = this.login.bind(this)
        this.signup = this.signup.bind(this)
    }

    enterEmail(event) {
        this.setState({email:event.target.value})
        // console.log(this.state.email)
    }

    enterPassword(event) {
        this.setState({password: event.target.value})
        // console.log(this.state.password)
    }

    login() {
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(this.state.email, this.state.password)
        })
        .catch((err) => (console.log('Error: ' + err.toString())))
    }

    signup() {
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log('successfully signed in')
        })
        .catch((err) => (console.log('Error: ' + err.toString())))
    }

    render() {
        return (
            <div>
                <h3 className='welcome-page'>Welcome to the website!</h3>
                <div>
                    Email: <Input className='email' onChange={this.enterEmail} placeholder="Enter your email id" allowClear  />
                </div>
                <div>
                    Password: <Input.Password onChange={this.enterPassword} placeholder="Enter password" className='password' />
                </div>
                <Button onClick={this.login} className='login-btn'>Login</Button>
                <Button onClick={this.signup}>Signup</Button>
            </div>
        )
    }
}

export default Login