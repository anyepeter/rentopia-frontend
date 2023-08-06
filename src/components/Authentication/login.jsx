import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../../Styles/authentication/AuthenticateNavbar.css'
import { useDispatch } from 'react-redux';
import { getAccessToken } from '../../Redux/authentication/singup';

const Login = () => {
   const dispacth = useDispatch()


   const { register, handleSubmit } = useForm()
   const onSubmit = (data) => {
      dispacth(getAccessToken(data))
   }

   const navigate = useNavigate();

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
                    <li><span></span> <p>Change your passwords periodically</p></li>
                    <li><span></span> <p>Avoid re-using password for multiple site</p></li>
                    <li><span></span> <p>Use complex characters including uppercase and number</p></li>
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

               <form onSubmit={handleSubmit(onSubmit)}>


        <label htmlFor='email'>
        <input {...register("email")} id='email'/>
        </label>


        <label htmlFor='password'>
        <input {...register("password")} />
        </label>
      
      <input type="submit" />
    </form>

            </section>
         </main>

    </>;
}

export default Login;