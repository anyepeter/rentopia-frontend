 import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/navbar/userProfile.css';

import { ToastContainer, toast } from 'react-toastify';




  
const UserProfile = () =>{
    const navigate = useNavigate();

    const success = () => toast.success("Logout successfully!",{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
          });

 
      const handleLogout = () => {
        localStorage.clear();
         success();
        setTimeout(() => {
        window.location.reload(navigate('/'));
        }, 5000);
        }

        const userInfo = JSON.parse(localStorage.getItem('userInfo')) || null;

    return (
        <>
    <section className='profile-dropDown'>
                <section className='profileContainer' >
           {
               userInfo?.avatar === null ? <img className='userProfile' src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" alt="avatar" /> : <img className='userProfile' src={userInfo?.avatar} alt="avatar" />
           }
        </section>

        <ToastContainer 
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
limit={1}
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover={false}
theme="light"
        />
        
        <Dropdown pointing="top right">
    <Dropdown.Menu>
      <Dropdown.Item text='Settings' icon='settings' as={Link} to='/dashboard'/>
      <Dropdown.Item text='Sign Out' icon='sign out' onClick={handleLogout}/>
    </Dropdown.Menu>
    </Dropdown>
  </section>
  
  </>
)
}

export default UserProfile