import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    securityQuestion: {
      question: "",
      answer: ""
    }
  })
  const [userDataErrors, setUserDataErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameArray = name.split('.');

    if (nameArray.length === 1) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    } else if (nameArray.length === 2) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [nameArray[0]]: {
          ...prevUserData[nameArray[0]],
          [nameArray[1]]: value,
        },
      }));
    }
  }

  const validateSignUp = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is Required"
    }
    if (!values.email) {
      errors.email = "Email is Required"
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is Required"
    }
    if (!values.password) {
      errors.password = "Password is Required"
    }
    return errors;
  }

  const onSignUpSubmit = (e) => {
    e.preventDefault();
    setUserDataErrors(validateSignUp(userData));
    
    if (Object.keys(userDataErrors).length === 0) {
      setIsSubmit(true)
      console.log(userData)
    }
  }


  return (
    <form onSubmit={onSignUpSubmit}>
      <div className='signup flex flex-col p-2 gap-6'>

        <div className='flex justify-between'>
          <div className="relative h-11 w-[45%]">
            <input
              type='text'
              value={userData.name}
              name='name'
              onChange={handleChange}
              placeholder="Name"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Name
            </label>
            <p>{userDataErrors.name}</p>
          </div>
          <div className="relative h-11 w-[45%] min-w-[200px]">
            <input
              type='text'
              onChange={handleChange}
              name='email'
              value={userData.email}
              placeholder="email"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
            <p>{userDataErrors.email}</p>

          </div>
        </div>

        <div className='flex justify-between'>

          <div className="relative h-11 w-[45%] min-w-[200px]">
            <input
              type='text'
              name='phoneNumber'
              onChange={handleChange}
              value={userData.phoneNumber}
              placeholder="Phone Number"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Phone Number
            </label>
            <p>{userDataErrors.phoneNumber}</p>

          </div>

          <div className="relative h-11 w-[45%] min-w-[200px]">
            <input
              type='password'
              name='password'
              onChange={handleChange}
              value={userData.password}
              placeholder="Password"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
            <p>{userDataErrors.password}</p>

          </div>

        </div>

        <div className="relative h-11 w-full min-w-[200px]">
          <select
            name='securityQuestion.question'
            onChange={handleChange}
            value={userData.securityQuestion.question}
            placeholder="Title"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          >
            <option className='text-black' value="None">
              Security Question
            </option>
            <option className='text-black'>What is your Favourite Color?</option>
          </select>
          <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Security Question
          </label>
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            name='securityQuestion.answer'
            type='text'
            value={userData.securityQuestion.answer}
            onChange={handleChange}
            placeholder="Answer"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Answer
          </label>
        </div>
        <div className='text-center text-sm text-blue-400'>
          Already have an Account ? <Link className="text-blue-500" to="/login">Login</Link>
        </div>
        <div className='Submitbtn text-center'>
          <button
            onClick={()=>setIsSubmit(true)}
            className="bg-[#7864F4] hover:bg-[#6a54f8] text-white font-semibold py-2 px-4 rounded"
            type="submit">Submit</button>
        </div>
      </div>
    </form>
  )
}

export default SignUp
