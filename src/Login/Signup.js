import React, { Component } from 'react'
import Navbar from './Navbar'
 class Signup extends Component {
     constructor(props)
     {
         super(props)
         this.state=
         {
           username:'',
           password:'',
           email:''  
         }
     }
     change=(event)=>
     {
         const name=event.target.name;
         const value=event.target.value;
         this.setState(
             {
                 [name]:value
             }
         )
     }
     post=(event)=>
     {
         event.preventDefault();
         const {username,password,email}=this.state;
         const member=
         {
             "username":username,
             "password":password,
             "email":email
         }
         fetch("http://localhost:3000/member",{
             method:'POST',
             body:JSON.stringify(member),
             headers:{
                 "Content-type":"application/json"
             }
         }
     ).then(result=>console.log(result.json().then(data=>data))).catch(error=>console.log(error))
     this.setState(
         {
             username:"",
             password:"",
             email:''
         }
     )
     setTimeout(function() { alert("Registration Successful !!"); }, 1000);
     this.props.history.push("/");
        }
    render() {
        
        return (
            <div>
                <Navbar />
           <div className="Login">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div  className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-5 col-md-offset-4 col-lg-4 col-lg-offset-4 bc">

                            <h3>Sign Up</h3>




                            <div className="panel-body">
                                <form onSubmit={this.post} >

                                    <div className="form-group">
                                        <label for="uname">username</label>
                                        <div className="input-group">
                                            <div className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></div>
                                            <input name="username" onChange={this.change} autofocus required type="text" id="uname" className="form-control"  placeholder="Your username" tabindex="1" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="ename">email</label>
                                        <div className="input-group">
                                            <div className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></div>
                                            <input name="email" onChange={this.change} autofocus required type="email" id="ename" className="form-control"  placeholder="Your email" tabindex="2" />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        
                                        <div className="input-group">
                                            <div className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></div>
                                            <input name="password" onChange={this.change} required type="password" className="form-control" placeholder="Your password" tabindex="3" />
                                        </div>
                                    </div>

                                    

                                    <button type="submit" className="btn btn-block btn-success js" tabindex="4">Register</button>

                                    
                                </form>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p>{this.state.username}</p>
            </div>
        )
    }
}

export default Signup
