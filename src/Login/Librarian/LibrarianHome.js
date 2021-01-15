import React, { Component } from 'react'
import Navbar from './Navbarlibrarian'
import Welcome from './Welcome'
import Searchby from './Searchby';

 class LibrarianHome extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
            showf:false
        }
    }
    changest=()=>
    {
     this.setState(
         {
            showf:!this.state.showf
         }
     )   
       
        
    }
    
    render() {
        let csclass= this.state.showf ? "cn":"hid"
        
        var details=JSON.parse(localStorage.getItem( "authenticted_librarian" ));
        return (
            <div>
                <Navbar change={this.changest}/>
              <Welcome user={details.username}/>
              <Searchby hidclass={csclass} showlib={this.state.showlib} />
            </div>
        )
    }
}

export default LibrarianHome
