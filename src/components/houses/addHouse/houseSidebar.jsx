import React from 'react';

import '../../../Styles/houseListing/siderBar.css';

const HouseSidebar = () => {
    return <div className='siderBarContaner'>

     <section className='siderSection'>
       <h1 className='remove-name'>Overview</h1>
       <hr />
       <ul className='siderItems'>
        {/* <li><span><AiOutlineDashboard /></span><p className='remove-name'>Dashboard</p></li>
        <li><span><FaRegCommentDots /></span><p className='remove-name'>Comments</p></li> */}
       </ul>
     </section>

     <section className='siderSection'>
        <h1 className='remove-name'>Manage Property</h1>
        <hr />
        <ul className='siderItems'>
        {/* <li><span><BsHouseDoor /></span><p className='remove-name'>Listing Properties</p></li>
        <li><span><AiOutlineStar /></span><p className='remove-name'>Favorite Properties</p></li>
        <li><span><IoArrowRedoOutline /></span><p className='remove-name'>Submit Property</p></li> */}
       </ul>
     </section>

     <section className='siderSection'>
     <h1 className='remove-name'>Your details</h1>
        <hr />
        <ul className='siderItems'>
        {/* <li><span><MdOutlineManageAccounts /></span><p className='remove-name'>Personal Information</p></li>
        <li><span><RiLockPasswordLine /></span><p className='remove-name'>Change Password</p></li> */}
       </ul>
    </section>

    </div>;
}


export default HouseSidebar;