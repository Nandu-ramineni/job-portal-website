// Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { FcManager } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import { PiPasswordThin } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
const Login = ({handleAdminLogin, onCloseForm}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // If login is successful, update isAdminLoggedIn
        handleAdminLogin();
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError("email/password is invalid");
        console.error(errorMessage);
      });
  };
  
  return (
    <div className="block justify-center items-center m-auto md:w-full">
      
        <div className="flex justify-between text-center mb-4">
          <h1 className="flex justify-center gap-2 items-center text-2xl font-extrabold text-green-500"><FcManager className='text-2xl' />Admin Login</h1>
          <button type="button" onClick={onCloseForm} className="text-2xl text-[#FF9843] hover:text-[#FF004D]" ><IoMdClose /> </button>
        </div>
        <form className="mt-8 w-full" onSubmit={onLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="flex justify-center gap-2 items-center text-md font-medium text-gray-600"><CiMail /> Email address</label>
            <input id="email" name="email" type="email" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="flex justify-center gap-2 items-center text-md font-medium text-gray-600"><PiPasswordThin /> Password</label>
            <input id="password" name="password" type="password" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Password" onChange={(e) => setPassword(e.target.value) }/>
          </div>
          {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}
          <div className="text-center">
            <button type="submit" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </div>
          <p className='text-center text-red-600'>Note: Only admin can post a job</p>
        </form>
      
    </div>
  );
};
export default Login;
