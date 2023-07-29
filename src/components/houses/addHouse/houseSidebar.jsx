import React from 'react';
import { AiOutlineDashboard } from 'react-icons/Ai'
import { FaRegCommentDots } from 'react-icons/Fa'
import { BsHouseDoor } from 'react-icons/Bs'
import { AiOutlineStar } from 'react-icons/Ai'
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import '../../../Styles/houseListing/siderBar.css';

const HouseSidebar = () => {
    return <div className='siderBarContaner'>

     <section className='siderSection'>
       <h1 className='remove-name'>Overview</h1>
       <hr />
       <ul className='siderItems'>
        <li><Link className='link-siderbar'><span><AiOutlineDashboard  style={{fontSize: '30'}}/></span><p className='remove-name'>Dashboard</p></Link></li>
        <li><Link className='link-siderbar'><span><FaRegCommentDots  style={{fontSize: '30'}}/></span><p className='remove-name'>Comments</p></Link></li>
       </ul>
     </section>

     <section className='siderSection'>
        <h1 className='remove-name'>Manage Property</h1>
        <hr />
        <ul className='siderItems'>
      <li><Link className='link-siderbar'><span><BsHouseDoor  style={{fontSize: '30'}}/></span><p className='remove-name'>Listing Properties</p></Link></li>
      <li><Link className='link-siderbar'><span><AiOutlineStar  style={{fontSize: '30'}}/></span><p className='remove-name'>Favorite Properties</p></Link></li>
      <li><Link className='link-siderbar'><span><QueuePlayNextIcon style={{fontSize: '30'}}/></span><p className='remove-name'>Submit Property</p></Link></li>
       </ul>
     </section>

     <section className='siderSection'>
     <h1 className='remove-name'>Your details</h1>
        <hr />
        <ul className='siderItems'>
        <li><Link className='link-siderbar'><span><AccountCircleIcon style={{fontSize: '30'}}/></span><p className='remove-name'>Personal Information</p></Link></li>
        <li><Link className='link-siderbar'><span><LockIcon  style={{fontSize: '30'}}/></span><p className='remove-name'>Change Password</p></Link></li>
       </ul>
    </section>

    </div>;
}


export default HouseSidebar;