import React from 'react';
import { login } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    allTrue = obj => {
        let formValues = Object.values(obj)
        let values = [];
        formValues.forEach(value => {
            if(!!value){
                values.push(value)
            }
        })
        if(values.length < formValues.length){return false}else{return true}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.allTrue(this.state) === false){
            alert("All fields must be filled out")
        }else{
            this.props.loginAction(this.state, this.props.history)
        }
    }
    
    render() {
        const { username, password, password_confirmation } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={this.handleChange}/>
                    <br />
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={this.handleChange}/>
                    <br />
                    <label>Confirm Password:</label>
                    <input type="password" name="password_confirmation" value={password_confirmation} onChange={this.handleChange}/>
                    <br />
                    <button>Submit</button>
                </form>
                <br />
                <NavLink to='/'>Home</NavLink>
            </div>
        )
    }
}

export default connect(null, { loginAction: login })(Login);