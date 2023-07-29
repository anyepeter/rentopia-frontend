import React from 'react';
import { AiOutlineDashboard } from 'react-icons/Ai'
import { FaRegCommentDots } from 'react-icons/Fa'
import { BsHouseDoor } from 'react-icons/Bs'
import { AiOutlineStar } from 'react-icons/Ai'
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import '../../../Styles/houseListing/siderBar.css';

const HouseSidebar = () => {
    return <div className='siderBarContaner'>

     <section className='siderSection'>
       <h1 className='remove-name'>Overview</h1>
       <hr />
       <ul className='siderItems'>
        <li><span><AiOutlineDashboard /></span><p className='remove-name'>Dashboard</p></li>
        <li><span><FaRegCommentDots /></span><p className='remove-name'>Comments</p></li>
       </ul>
     </section>

     <section className='siderSection'>
        <h1 className='remove-name'>Manage Property</h1>
        <hr />
        <ul className='siderItems'>
      <li><span><BsHouseDoor /></span><p className='remove-name'>Listing Properties</p></li>
      <li><span><AiOutlineStar /></span><p className='remove-name'>Favorite Properties</p></li>
      <li><span><QueuePlayNextIcon /></span><p className='remove-name'>Submit Property</p></li>
       </ul>
     </section>

     <section className='siderSection'>
     <h1 className='remove-name'>Your details</h1>
        <hr />
        <ul className='siderItems'>
        <li><span><AccountCircleIcon /></span><p className='remove-name'>Personal Information</p></li>
        <li><span><LockIcon /></span><p className='remove-name'>Change Password</p></li>
       </ul>
    </section>

    </div>;
}


export default HouseSidebar;