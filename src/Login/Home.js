import React, { Component } from 'react'
import './Home.css';
import UserLogin from './UserLogin';
import LibrarianLogin from './LibrarianLogin';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            show: true,
            showuserlogin: false,
            showlibrarianlogin: false
        }
    }

    openUserLogin = () => {
        const showuser = this.state.showuserlogin;
        const show =this.state.show;

        this.setState(
            {
                show:!show,
                showuserlogin: !showuser,

            }
        )
    }
    home=()=>
    {
        this.props.history.push("/");
        this.setState(
            {
            show: true,
            showuserlogin: false,
            showlibrarianlogin: false
            }
        )
    }
    openLibrarianLogin = () => {
        const show=this.state.show;
        const showlibrarian = this.state.showlibrarianlogin;
        this.setState(
            {
                show:!show,
                showlibrarianlogin: !showlibrarian
            }
        )
    }
    render() {
        let user = null
        let Librarian = null
        if (this.state.showuserlogin) {
            user = (<UserLogin />)
        }
        let button = null
        if (this.state.show) {
            button = (<div className="buttonblock"> <button type="button" onClick={this.openUserLogin} class="btn btn-info">User</button>
                <button type="button" onClick={this.openLibrarianLogin} class="btn btn-info">Admin</button></div>)
        }
        let home=null
        if(this.state.show===false){
            home=( <i className="material-icons" onClick={this.home}>home</i>)
        }
        if (this.state.showlibrarianlogin) {
            user = (<LibrarianLogin />)
        }
        return (
            <div className="Home">
                <nav class="mainnav">
                {home}
                    <h3>National Library</h3>
                    {button}
                </nav>
             
            
              
                {user}
                {Librarian}
            </div>
            
        )
    }
}

export default Home
