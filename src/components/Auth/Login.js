import React, {Component} from "react";
import Axios from "axios";
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(){
        super()
        this.state ={
            username: "",
            password: '',
            redirect: false
        }
        this.handleUsername= this.handleUsername.bind(this)
        this.handlePassword= this.handlePassword.bind(this)
        this.loginUser= this.loginUser.bind(this)
    }

    handleUsername(e){
        this.setState({
            username: e.target.value
        })
    }
    handlePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    loginUser(){
        Axios.post('/auth/login', {
            username:this.state.username,
            password:this.state.password
        }).then(() => this.setState({redirect:true}))
            .catch(() => alert("Nothing for you Orochimaru! Try logging in again"))
    }

    render(){
        if(this.state.redirect){
            alert('Welcome back Sasuke')
            return <Redirect to="/dashboard"/>
        }
        return(
            <div>
                <h3>Login</h3>
                <div>
                    Username
                    <input onChange={this.handleUsername} placeholder ="username"/>
                    Password
                    <input onChange={this.handlePassword} placeholder = "password" type= "password"/>
                </div>
                <button onClick={this.loginUser}>Log In</button>
            </div>
        )
    }
}


export default Login