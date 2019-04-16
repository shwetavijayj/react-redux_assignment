import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Login extends Component {
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
                                    <input type="text" className="form-control form-control-lg" placeholder="username" name="username" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
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

export default Login;
