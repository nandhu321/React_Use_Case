import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom';
import './Navbaruser.css';

 class Navbar extends Component {
     constructor(props)
     {
         super(props)
     }
     logout=()=>
     {
         localStorage.removeItem("authenticted_user");
         this.props.history.push('/');
     }
    render() {
        return (
            <div className="Navbaruser">
                <nav class="mainnav">
                <Link to="/userhome"><i class="material-icons" >home</i></Link>
                
                <Link id="anchor" to="/userbooks"><h5>Mybooks</h5></Link>
                    <h3>National Library</h3>
                   
                    <button type="button" onClick={this.logout} class="btn btn-danger">Logout</button>
                    <i onClick={this.props.changed} id="fontaw" class="fa fa-search" style={{fontSize:"24px"}}></i>
                </nav> 
            </div>
        )
    }
}

export default withRouter( Navbar)
