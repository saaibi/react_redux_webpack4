import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form';

import { userActions } from "../../../actions/user.actions";

class AppLogin extends Component {
    state = {
        username: '',
        password: '',
        submitted: false
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            const user = {
                firstName: 'admin ',
                lastName: 'admin',
                username: 'admin',
                password: '123456'
            };
            // dispatch(userActions.register(user));
            dispatch(userActions.login(email, password));
        }
    }

    componentWillMount() {
        this.props.dispatch(userActions.logout());
    }
    render() {
        return (
            <div className="jumbotron">
                <div className="container login">
                    <div className="card">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <img className="mb-4" src="/app/public/images/logo-unum-header.png" alt="" />
                            </div>
                            <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggingIn: state.authentication,
        registering: state.authentication
    };
};
const connectedAppLogin = connect(mapStateToProps)(AppLogin);
export { connectedAppLogin as AppLogin }; 