import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Story from './components/Story';
import Favs from './components/Favs';

export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/story' component={Story}/>  
            <Route path='/favs' component={Favs}/>          
        </Switch>
    )
}