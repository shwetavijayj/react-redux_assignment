import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions/login/index';
import store from '../store';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.onchange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit(e) {
        e.preventDefault();
        let userData = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginUser(userData);
        this.props.increment(incrementActionCreator())
    }

    render() {
        const { user } = this.props.userData;
        return (

            <div className="login">
                <div className="container">
                    {user ? user.username : null}
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="username" name="username" value={this.state.username} onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange.bind(this)} />
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

const mapStateToprops = (state) => ({
    userData: state.userData
})

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      increment: action1 => dispatch({ type: 'INCREMENT', data: action1 }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
      reset: () => dispatch({ type: 'RESET' })
    }
  }

export default connect(mapStateToprops, { loginUser })(Login);
