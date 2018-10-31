import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form';
import AppHeader from '../../AppHeader';

import { userActions } from "../../../actions/user.actions";

class AppLogin extends Component {
    state = {
        username: '',
        password: '',
        submitted: false
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
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
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (
            <div className="container">
                <AppHeader name="LOGIN" />
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        loggingIn: state.authentication,
        registering: state.authentication
    };
};
const connectedAppLogin = connect(mapStateToProps)(AppLogin);
export { connectedAppLogin as AppLogin }; 