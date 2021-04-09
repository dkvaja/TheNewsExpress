import React from 'react';

const NavBar = () =>{
    return(
        <>
        <nav>
            <div id='logo-div'>
                <a href='#'>The News Express</a>
            </div>
            <ul id='navbar-ul'>
                <li className='list-items' ><a href='#'>Home</a></li>
                <li className='list-items' ><a href='#'>Services</a></li>
                <li className='list-items' ><a href='#'>About Us</a></li>
                <li className='list-items' ><a href='#'>Contact Us</a></li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;