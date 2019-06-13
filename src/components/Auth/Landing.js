import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


class Landing extends Component {
    constructor(){
        super()
        this.state ={}
        this.logOutUser = this.logOutUser.bind(this)
    }

    logOutUser(){
        axios.post('/auth/logout').then(res => console.log(res.data))
    }

    render(){
        return(
            <div>
                <Link to="login"><button>Login</button></Link>
                <Link to="register"><button>Create Account</button></Link>
                <button onClick={this.logOutUser}>Logout</button>
            </div>
        )
    }
}


export default Landing