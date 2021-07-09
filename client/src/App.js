import React from 'react';
import{Container, Grid, Divider} from '@material-ui/core';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { grey } from '@material-ui/core/colors';
const App = () => {

    
    return (
        <BrowserRouter> 
            
            
            
            <Switch>
            <Route path="/" exact component={Home}/>
            </Switch>
        
        </BrowserRouter>

    )

}

export default App;