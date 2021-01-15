import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

 class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav class="mainnav">
                <Link to="/"><i class="material-icons" >home</i></Link>
                    <h3>National Library</h3>
                   
                    
                </nav> 
            </div>
        )
    }
}

export default Navbar
