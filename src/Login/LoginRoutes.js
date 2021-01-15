import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Mybooks from '../User/Mybooks'
import Signup from './Signup';
import UserHome from '../User/UserHome'

import LibrarianHome from './Librarian/LibrarianHome';

class LoginRoutes extends Component {
   constructor(props)
   {
       super(props);
   }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/signup'  component={Signup} />
                        <Route path='/userhome'  component={UserHome} />
                        <Route path='/librarianhome'  component={LibrarianHome} />
                        <Route path='/userbooks'  component={Mybooks} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
         }
}

export default LoginRoutes