import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import '../../Styles/authentication/AuthenticateNavbar.css'
import { useDispatch } from 'react-redux';
import { signupUser } from '../../Redux/authentication/singup';
import { Spin } from "react-cssfx-loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SingUp = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate();
   const { handleSubmit, register } = useForm({ disableEnforceFocus: false });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const { error } = useSelector((state) => state.register);


   const notify = () => toast.error("Email already exist!",{
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
        });
  
        const success = () => toast.success("Register successfully!",{
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
       } else if (!data.phone_number) {
         const phoneError = document.getElementById('phoneError');
         phoneError.style.display = 'block';
         setTimeout(() => {
           passwordError.style.display = 'none';
         }, 1500);
         return;
       }
       else if (!data.name) {
         const nameError = document.getElementById('nameError');
         nameError.style.display = 'block';
         setTimeout(() => {
           passwordError.style.display = 'none';
         }, 1500);
         return;
       }
       else if (!data.occupation) {
         const occupationError = document.getElementById('occupationError');
         occupationError.style.display = 'block';
         setTimeout(() => {
           passwordError.style.display = 'none';
         }, 1500);
         return;
       }
        else if (!data.avatar) {
          const avatarError = document.getElementById('avatarError');
          avatarError.style.display = 'block';
          setTimeout(() => {
            passwordError.style.display = 'none';
          }, 1500);
          return;
        }
       
      const requestData = new FormData();
       requestData.append('name', data.name);
       requestData.append('email', data.email.toLowerCase());
       requestData.append('password', data.password);
       requestData.append('phone_number', data.phone_number);
       requestData.append('occupation', data.occupation);
       const avater = data.avatar[0]
       requestData.append('avatar', avater); 


    setIsSubmitting(true);
    setTimeout( async () => {
    try {
      await dispatch(signupUser(requestData));
      setIsSubmitting(false)
    } catch (error) {
     setIsSubmitting(false);
    }
  }, 1000);

  }



  const tokenEl = localStorage.getItem('token');

  useEffect(() =>{
  if(error === null && tokenEl && isSubmitting){
   success();
    setTimeout(() => {
    window.location.reload(navigate('/'));
  }, 1500);
  } 
  else if(error !== null && isSubmitting){
    notify();
  }
  }, [error, tokenEl, isSubmitting, navigate])
  

   const handleClick = (event) => {
 
     navigate('/login');
   }


    return <>
    <section className='authentcation-section'>
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
                    <li><CheckBoxOutlinedIcon className='tickbox' /> <p>Change your passwords periodically</p></li>
                    <li><CheckBoxOutlinedIcon className='tickbox'  /> <p>Avoid re-using password for multiple site</p></li>
                    <li><CheckBoxOutlinedIcon className='tickbox'  /> <p>Use complex characters including uppercase and number</p></li>
                </ul>
               </div>
            </section>

             <section className='authenticate-section'>
               <ul className='navbar-Sider'>
                  <li>
                     <p onClick={handleClick}>Login</p>
                  </li>
                  <li>
                     <p>Register</p>
                     <hr />
                  </li>
               </ul>



       <form className='signup-form' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
          theme="dark"
        />
        <label htmlFor='name'><p>Username</p>
        <input className='singup-input' {...register("name")} id='name' />
        <span id='nameError' style={{color: 'red', fontSize: 13, display: 'none'}}>Username needed!</span>
        
        </label>

        <label htmlFor='email'><p>Email</p>
        <input className='singup-input'  {...register("email")} id='email'/>
        <span id='emailError' style={{color: 'red', fontSize: 13, display: 'none'}}>Email needed!</span>
        </label>

        <label htmlFor='number'><p>Phone Number</p>
        <input className='singup-input' {...register("phone_number")} />
        <span id='phoneError' style={{color: 'red', fontSize: 13, display: 'none'}}>Phone number needed!</span>
        </label>

        <label htmlFor='occupation'><p>Occupation</p>
        <input className='singup-input'  {...register("occupation")} />
        <span id='occupationError' style={{color: 'red', fontSize: 13, display: 'none'}}>Please provide your occupation!</span>
        </label>

        <label htmlFor='password'><p>Password</p>
        <input className='singup-input'  {...register("password")} />
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

        <label htmlFor='avatar'>
          <p>Avatar</p>
          <span id='avatarError' style={{color: 'red', fontSize: 13, display: 'none'}}>Avatar needed!</span>
          <input type='file' {...register("avatar")} accept="image/png, image/jpeg" />
        </label>
      <p>
      <button className='button-submit' type="submit" disabled={isSubmitting}>
      {isSubmitting ? <Spin color="#FFFFFF"  /> : 'Register'}
      </button>
      </p>
      
    </form>

            </section>
         </main>
         </section>
    </>;
}

export default SingUp;