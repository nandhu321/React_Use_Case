import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom';
import './Navbarlibrarian.css';

 class Navbarlibrarian extends Component {
     constructor(props)
     {
         super(props)
     }
     logout=()=>
     {
         localStorage.removeItem("authenticted_librarian");
         this.props.history.push('/');
     }
    render() {
        return (
            <div className="Navbaruser">
                <nav class="mainnav">
                <Link to="/librarianhome"><i class="material-icons" >home</i></Link>
                    <h3>National Library</h3>
                  
                    <button type="button" onClick={this.logout} class="btn btn-danger">Logout</button>
                    <i onClick={this.props.change} id="fontaw" class="fa fa-search" style={{fontSize:"24px"}}></i>
                </nav> 
            </div>
        )
    }
}

export default withRouter( Navbarlibrarian)
