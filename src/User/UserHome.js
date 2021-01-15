import React, { Component } from 'react'
import Navbar from './Navbaruser'
import Welcome from './Welcome'
import Books from './Books'
import Searchbytitle from './Searchbytitle'
 class UserHome extends Component {
     constructor(props)
     {
         super(props)
         this.state=
         {
             show:false
         }
     }
     changestate=()=>
     {
         console.log(this.state.show)
         const show=this.state.show
         this.setState(
             {
                 show:!show
             }
         )
         console.log(this.state.show)
     }
    render() {
        let cssclass= this.state.show ? "cnt":"hide"
        console.log(this.state.show)
        var details=JSON.parse(localStorage.getItem( "authenticted_user" ));
        return (
            <div>
                <Navbar changed={this.changestate}/>
               
              <Welcome user={details.username}/>
              <Searchbytitle hideclass={cssclass} show={this.state.show}/>
             
              
            </div>
        )
    }
}

export default UserHome
