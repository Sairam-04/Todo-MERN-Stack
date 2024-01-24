import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import postService from '../../services/postService';
import { setUser } from '../../utils/localStorage';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const [loginErrors, setLoginErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const validateLoginForm = (values) =>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if(!values.password){
      errors.password = "Password is Required";
     }
     return errors;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUser) => (
      {
        ...prevUser,
        [name]: value
      }
    ))
  }

  const onLoginSubmit = (e) => {
    e.preventDefault();
    setLoginErrors(validateLoginForm(userData))
    setIsSubmit(true)
  }

  const checkLogin = async () =>{
    try{
      const response = await postService(
        "http://localhost:5000/api/v1/login",
        userData,
        false
      );
      if (response && response.statusText === "OK") {
        if (response?.data?.success) {
          const { token} = response.data;
          setUser(token);
          navigate("/home");
        } else {
          alert("Something Went Wrong");
        }
      } else {
        alert("Something Went Wrong");
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    if(Object.keys(loginErrors).length === 0 && isSubmit){
      checkLogin();
    }
  },[isSubmit, loginErrors])
  return (
    <form
      onSubmit={onLoginSubmit}
      className='login flex flex-col items-center w-full p-2 gap-6 py-5'>
      <div className="relative h-11 w-[60%] min-w-[200px]">
        <input
          type='text'
          name='email'
          value={userData.email}
          onChange={handleChange}
          placeholder="email"
          className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
        />
        <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
        <p className="text-xs text-red-500">{loginErrors.email}</p>
      </div>

      <div className="relative h-11 w-[60%] min-w-[200px]">
        <input
          type='password'
          name='password'
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
          className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
        />
        <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>
        <p className="text-xs text-red-500">{loginErrors.password}</p>
      </div>

      <div className='text-center text-sm text-white'>
        Don't have an Account ? <Link className="text-blue-300" to="/register">Sign Up</Link>

      </div>

      <div className='Submitbtn text-center'>
        <button
          className="bg-[#7864F4] hover:bg-[#6a54f8] text-white font-semibold py-2 px-4 rounded"
          type="submit"
        >Submit</button>
      </div>
    </form>
  )
}

export default Login
