import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Error extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2>Something went wrong</h2>
                        <Link to="/login">Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Error;
