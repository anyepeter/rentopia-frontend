import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import '../../Styles/authentication/AuthenticateNavbar.css'

const AuthenticateSider = ({ test }) => {
    return <>
         <section className='authenticate-navbar'>
            <div>
           <h1>{test.address}</h1>
           <ul className='authenticate-navbar-link'>
            <li><Link className='home-link' to='/'>Home</Link></li>
            <li><KeyboardArrowRightOutlinedIcon /></li>
            <li><p>{test?.address}</p></li>
           </ul>
           </div>
         </section>
    </>;
}

export default AuthenticateSider;