import React from 'react'
import './userSignUP.css'

class userSignUpTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: '',
        checkpassword: ''
        };
        
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/signUp?username=${encodeURIComponent(this.state.username)}&\
                           password=${encodeURIComponent(this.state.password)}`)
        .then(response => response.json())
    }
    
    render () {
        return (
             <div className="container-signup-forum">
    
                <div class="username">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Enter a username: </label>
                    <input
                    id="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChangeUsername}
                    />
                </form>
                </div>

                <div class="password">
                <form>
                    <label htmlFor="name">Enter a password: </label>
                    <input
                    id="password"
                    type="text"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    />
                    <div class="data_submit_button">
                        <button id="info_submit" type="submit">Submit</button>
                    </div>
                </form>
                </div>
        
       </div>
        );
    }

}

export default userSignUpTest;