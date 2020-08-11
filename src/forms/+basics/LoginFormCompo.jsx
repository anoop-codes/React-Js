import React, { Component } from 'react';

const initialData = {
    username: '',
    password: '',
    isSubscribe: true
}

class LoginFormCompo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: initialData,
            errors: null
        }
    }


    //take $event object
    handleSubmit = ($event) => {
        //by default it will send the form to the server and reload the page , which is the default behaviour
        $event.persist();
        $event.preventDefault();

        const errors = this.submitValidation()

        this.setState({
            data: errors ? this.state.data : initialData,
            errors
        })

        if (!errors) {
            //api call to submit he form
            console.log('Submitted!!!', this.state.data);
        }

    }

    submitValidation = () => {
        const data = { ...this.state.data };
        let errors = {};

        Object.keys(data).forEach(name => {
            if (data[name] === '') {
                errors[name] = `${[name]} is required`;
            }
        })

        return Object.keys(errors).length > 0 ? errors : null;
    }


    handleChange = ($event) => {
        const data = { ...this.state.data };

        $event.persist();

        if ($event.target.type !== 'checkbox')
            data[$event.target.name] = $event.target.value;
        else
            data[$event.target.name] = !data.isSubscribe;

        this.setState({
            data
        })
    }

    render() {

        const { isSubscribe, username, password } = this.state.data;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Username"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <small id="username" className="form-text text-muted">We'll never share your username with anyone else.</small>
                    {this.state.errors?.username && <div className="alert alert-danger alert-sm">{this.state.errors.username}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    {this.state.errors?.password && <div className="alert alert-danger alert-sm">{this.state.errors.password}</div>}
                </div>
                <div className="form-check my-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="isSubscribe"
                        name="isSubscribe"
                        checked={isSubscribe}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="isSubscribe">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default LoginFormCompo;