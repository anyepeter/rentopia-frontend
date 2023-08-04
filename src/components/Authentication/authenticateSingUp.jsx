import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../../Styles/authentication/AuthenticateNavbar.css'

const SingUp = () => {
   const { register, handleSubmit } = useForm()
   const onSubmit = (data) => console.log(data)

   const navigate = useNavigate();

   const handleClick = (event) => {
 
     navigate('/login');
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
                     <p onClick={handleClick}>Login</p>
                  </li>
                  <li>
                     <p>Register</p>
                     <hr />
                  </li>
               </ul>

               <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor='username'><p>Username</p>
        <input {...register("firstName")} id='username' />
        </label>

        <label htmlFor='email'><p>Email</p>
        <input {...register("email")} id='email'/>
        </label>

        <label htmlFor='number'><p>Phone Number</p>
        <input {...register("number")} />
        </label>

        <label htmlFor='occupation'><p>Occupation</p>
        <input {...register("Occupation")} />
        </label>

        <label htmlFor='avatar'><p>Avatar</p>
        <input type='file' {...register("avatar")} />
        </label>
      
        <label htmlFor='password'><p>Password</p>
        <input {...register("password")} />
        </label>
      <p>
      <input type="submit" />
      </p>
      
    </form>

            </section>
         </main>

    </>;
}

export default SingUp;