import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/authentication/AuthenticateNavbar.css'

const NavbarSider = () => {
    return <>
     
     <header>
       <ul>
        <li><NavLink to=''l>Login</NavLink>
        </li>
        <li><NavLink to=''l>Register</NavLink>
        </li>
       </ul>
     </header>
    
    </>;
}

export default NavbarSider;