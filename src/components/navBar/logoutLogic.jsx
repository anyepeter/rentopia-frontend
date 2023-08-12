import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

const LogoutButton = () => {
  const navigate = useNavigate();

  const success = () =>
    toast.success('Logout successfully!', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const handleLogout = () => {
    localStorage.clear();
    success();
    setTimeout(() => {
      window.location.reload(navigate('/'));
    }, 1000);
  };

  return (
    <>
      <Dropdown.Item text="Settings" icon="dashb" as={Link} to="/dashboard" />
      <Dropdown.Item text="Sign Out" icon="sign out" onClick={handleLogout} />
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
    </>
  );
};

export default LogoutButton;
