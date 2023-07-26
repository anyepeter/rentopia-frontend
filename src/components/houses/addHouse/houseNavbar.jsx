import React from 'react';
import '../../../Styles/houseListing/houseNavbar.css'

const HouseNavbar = () => {
    return <header className='houseNavbarContainer'>
       
       <div className='houseNavbarSection'>
        <ul className='NavbarItems'>
            <li><img src='https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg' className='houseLogo' /></li>
            <li><img /></li>
            <li className='linkHouse' ><span>+</span><p>Submit Property</p></li>
        </ul>

        <ul className='NavbarItems'>
            <li><img src='https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg' className='userAvater' /></li>
            <li><p>Hi, Karan</p></li>
            <li>dropdown</li>
        </ul>
       </div>
       
    </header>;
}


export default HouseNavbar;