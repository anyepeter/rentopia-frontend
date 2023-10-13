import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import '../../../Styles/houseListing/houseNavbar.css'
import 'semantic-ui-css/semantic.min.css';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router';


const HouseNavbar = () => {

    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || null;
    const navigate = useNavigate();
    console.log(userInfo);

    const handleLogout = () => {
        localStorage.clear();
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Logout successfully',
            showConfirmButton: false,
            timer: 1500
          })
        setTimeout(() => {
        window.location.reload(navigate('/'));
        }, 1500);
        }

    return <header className='houseNavbarContainer'>
       
       <div className='houseNavbarSection'>
        <ul className='NavbarItems'>
            <li><img src='https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg' className='houseLogo' /></li>
            <li><img /></li>
            <li className='linkHouse' ><span>+</span><p>Submit Property</p></li>
        </ul>

        <ul className='NavbarItems'>
            <li>
                {
                    userInfo ? <img src='https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg' className='userAvater' /> : <img src='https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg' className='userAvater' />
                }
            </li>
            <li><p>Hi, {userInfo?.name}</p></li>
            <li><Dropdown pointing="top right">
    <Dropdown.Menu>
      <Dropdown.Item text='Settings' icon='settings' to='/dashboard'/>
      <Dropdown.Item text='Sign Out' icon='sign out' onClick={handleLogout}/>
    </Dropdown.Menu>
    </Dropdown></li>
        </ul>
       </div>
       
    </header>;
}


export default HouseNavbar;