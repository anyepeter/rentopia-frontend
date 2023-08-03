import React from 'react';
import { Link, Routes } from 'react-router-dom';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import '../../Styles/authentication/AuthenticateNavbar.css'
import NavbarSider from './navbarSider';

const AuthenticationPage = () => {
    return <>
         <section className='authenticate-navbar'>
            <div>
           <div>Login</div>
           <ul className='authenticate-navbar-link'>
            <li><Link to='/'>Home</Link></li>
            <li><KeyboardArrowRightOutlinedIcon /></li>
            <li><p>Login</p></li>
           </ul>
           </div>
         </section>
         <main>
            <section>
               <div>
                <h1>Welcome</h1>
                <p>
                Adipiscing lacinia pede proin vulputate habitasse donec adipiscing. Cubilia Interdum hac turpis et dignissim vehicula porta nostra dictum nostra semper. Dictumst congue dictum. Nam massa id, netus interdum amet Metus turpis scelerisque aptent sapien penatibus potenti.
                </p>
               </div>

               <div>
                <h2>Keep in a mind a few basic password rules :</h2>
                <ul>
                    <li><span></span> <p>Change your passwords periodically</p></li>
                    <li><span></span> <p>Avoid re-using password for multiple site</p></li>
                    <li><span></span> <p>Use complex characters including uppercase and number</p></li>
                </ul>
               </div>
            </section>

             <section>
             <NavbarSider />
              <Routes>
              </Routes>
            </section>
         </main>

    </>;
}

export default AuthenticationPage;