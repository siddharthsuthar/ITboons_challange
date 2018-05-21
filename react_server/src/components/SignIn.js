import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap'

class SignIn extends Component {


    state = {
        username: '',
        password: ''

    };

    componentWillMount(){
        this.setState({
            username: '',
            password: '',
            images :[]
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div>
                    <form>
                        <div className="form-group">
                            <h1>Login</h1>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Username"
                                value={this.state.username}
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <Button
                                bsStyle="primary"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                Submit
                            </Button>
                            <pre></pre>
                            <Button
                                bsStyle="success"
                                onClick={() => this.props.loginSignUp("SignUp")}>
                                Register
                            </Button>


                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;