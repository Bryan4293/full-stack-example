import React, {Component} from "react";
import {connect} from 'react-redux'
import {getUser} from "../../redux/reducer";
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            redirect: false
        }
    }

    componentDidMount(){
        this.props.getUser()
    }

    render(){
        if(!this.props.user){
            this.setState({redirect:true})
        }
        if(this.state.redirect){
            alert("please login");
            return <Redirect to="/" />
        }
        console.log(this.props.user)
        return(
            <div>Dashboard</div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(Dashboard)