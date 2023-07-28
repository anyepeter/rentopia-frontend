import React from 'react';
import AddHouse from '../components/houses/addHouse/addHouseForm';
import HouseNavbar from '../components/houses/addHouse/houseNavbar';
import HouseSidebar from '../components/houses/addHouse/houseSidebar';
import '../Styles/houseListing/siderBar.css'


const AddousePage = () => {
    return <div>
        <HouseNavbar />
        <div className='homeBashboard'>
            <HouseSidebar />

        <AddHouse />
        </div>
       
    </div>;
}
export default AddousePage;