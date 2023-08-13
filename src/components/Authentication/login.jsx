import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../../Styles/authentication/AuthenticateNavbar.css'
import { useDispatch, useSelector } from 'react-redux';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import { ToastContainer, toast } from 'react-toastify';
import { Spin } from "react-cssfx-loading";
import { getAccessToken } from '../../Redux/authentication/singup';
import { useState } from 'react';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
   const dispatch = useDispatch()
   const { error } = useSelector((state) => state.register);
   const { register, handleSubmit } = useForm()
   const [isSubmitting, setIsSubmitting] = useState(false);
   

   const notify = () => toast.error("Wrong email or password",{
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
      });

      const success = () => toast.success("Login successfully!",{
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
          });

   const onSubmit = async (data) => {
      if (!data.email) {
        const emailError = document.getElementById('emailError');
        emailError.style.display = 'block';
        setTimeout(() => {
          emailError.style.display = 'none';
        }, 1500);
        return;
      } else if (!data.password) {
        const passwordError = document.getElementById('passwordError');
        passwordError.style.display = 'block';
        setTimeout(() => {
          passwordError.style.display = 'none';
        }, 1500);
        return;
      }
  
      setIsSubmitting(true);
      setTimeout( async () => {
      try {
        await dispatch(getAccessToken(data));
        setIsSubmitting(false)
      } catch (error) {
        setIsSubmitting(false);
      }
    }, 1500)
 
    };

   const tokenEl = localStorage.getItem('token');

useEffect(() =>{
if(error === null && tokenEl && isSubmitting){
  success();
  setTimeout(() => {
    window.location.reload(navigate('/'));
  }, 1500);
} else if(error !== null && isSubmitting){
  notify();
}
}, [error, tokenEl, isSubmitting, navigate])


   const handleClick = (event) => {
 
     navigate('/registers');
   }

    return <>
         <main className="authenticate-container">
            <section className='welcome-container'>
               <div className='welcome-section'>
                <h1>Welcome</h1>
                <p>
                Adipiscing lacinia pede proin vulputate habitasse donec adipiscing. Cubilia Interdum hac turpis et dignissim vehicula porta nostra dictum nostra semper. Dictumst congue dictum. Nam massa id, netus interdum amet Metus turpis scelerisque aptent sapien penatibus potenti.
                </p>
               </div>

               <div className='check-section'>
                <h2>Keep in a mind a few basic password rules :</h2>
                <ul className='check-container'>
                    <li><CheckBoxOutlinedIcon className='tickbox'  /> <p>Change your passwords periodically</p></li>
                    <li><CheckBoxOutlinedIcon className='tickbox'  /> <p>Avoid re-using password for multiple site</p></li>
                    <li><CheckBoxOutlinedIcon className='tickbox' /> <p>Use complex characters including uppercase and number</p></li>
                </ul>
               </div>
            </section>

             <section className='authenticate-section'>
               <ul className='navbar-Sider'>
               <li>
                     <p>Login</p>
                     <hr />
                  </li>
                  <li>
                     <p onClick={handleClick} >Register</p>
                  </li>

               </ul>

               <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>


        <label htmlFor='email'><p>Email</p>
        <input className='singup-input' placeholder='Email' {...register("email")} id='email'/>
       <span id='emailError' style={{color: 'red', fontSize: 13, display: 'none'}}>Email needed!</span>
        </label>
        <ToastContainer 
          autoClose={1500}
          position="top-center"
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
        <label htmlFor='password'><p>Password</p>
        <input className='singup-input' placeholder='Password' {...register("password")} />
        <span id='passwordError' style={{color: 'red', fontSize: 13, display: 'none'}}>Password needed!</span>
        </label>
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

      <p><button className='button-submit' disabled={isSubmitting} type='submit'>
      {isSubmitting ? <Spin color='#FFFFFF' /> : 'Login'}
         </button></p>
    </form>

            </section>
         </main>

    </>;
}

export default Login;