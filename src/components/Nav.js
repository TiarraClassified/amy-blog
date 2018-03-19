import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

export default function Navbar (){

    return(
    <section className='navbar'>
        <Link to='/'><div className='tab' style={{textAlign:'right'}}>Stories</div></Link>
        <Link to='/about'><div className='tab'>About Me</div></Link>
        <Link to='/favs'><div className='tab'>Author Favorites</div></Link>
    </section>

    )
}