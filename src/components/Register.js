import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Register extends Component {
    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign up</h1>
                            <p className="lead text-center">Sign up to your new account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Name" name="name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg" placeholder="myemail@xyz.com" name="email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="username" name="username" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="cpassword" />
                                </div>

                                <input type="submit" className="btn btn-info btn-block mt-4" value="Enter" />
                                <input type="submit" className="btn btn-info btn-block mt-4" value="Reset" />
                                Already have an account?<Link to="/login">login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
