import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {loginUser} from '../actions/login/index';
class Login extends Component {

    constructor(props){
        super(props);
        this.onchange = this.onchange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit(e) {
        e.preventDefault();
        this.props.registerUser(this.props.user);
    }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="username" name="username" value={this.props.user.username} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.props.user.password} />
                                </div>

                                <input type="submit" className="btn btn-info btn-block mt-4" />
                                Don't have an account?<Link to="/register">register now</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToprops = (state)=>({
    user : state.userData
})

export default connect(mapStateToprops,{loginUser})(Login);
