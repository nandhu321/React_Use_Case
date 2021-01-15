import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './UserLogin.css';

class UserLogin extends Component {


    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            members: [],
           
            message: '',


        }
    }
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [name]: value
            }
        )
    }

    componentDidMount() {
        fetch("http://localhost:3000/member").then(result => result.json().then(data => this.setState({
            members: data
        })))
            .catch((error) => console.log(error));


    }



    usersubmit = (event) => {
        event.preventDefault();

        let accounts = this.state.members;
        let authenticated_user = {}
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].username === this.state.username && accounts[i].password === this.state.password) {
                authenticated_user = accounts[i];

                let authenticated_user_serialized = JSON.stringify(authenticated_user);
                localStorage.setItem("authenticted_user", authenticated_user_serialized);

                console.log(this.props)
                this.props.history.push('/userhome')
            }
            else {
                let message = "Invalid Credentials"

                this.setState(
                    {
                        message: message
                    }
                )
            }
        }

    }





    signup = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>

                <div className="Login">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-5 col-md-offset-4 col-lg-4 col-lg-offset-4 bc">
                                <div className="cent">
                                <h3>User Login</h3>
                                </div>



                                <div className="panel-body">
                                    <form onSubmit={this.usersubmit} >

                                        <div className="form-group">
                                            <label for="uname">username</label>
                                            <div className="input-group">
                                                <div className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></div>
                                                <input name="username" onChange={this.change} autofocus required type="text" id="uname" className="form-control" placeholder="Your username" tabindex="1" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="password">Password</label>
                                         

                                            <div className="input-group">
                                                <div className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></div>
                                                <input name="password" onChange={this.change} required type="password" className="form-control" placeholder="Your password" tabindex="3" />
                                            </div>
                                        </div>


                                        <div className="checkbox">
                                            <label><input type="checkbox" /> Remember me</label>
                                        </div>

                                        <button type="submit" className="btn btn-block btn-success js" tabindex="3">Sign in</button>
                                        <div className="cen">
                                        <Link to="/signup" style={{ color: 'red', textalign: 'center', display: 'block' }} activeStyle={{ color: 'red' }}>Not yet a Member?</Link>
                                        <b>{this.state.message}</b>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(UserLogin)
