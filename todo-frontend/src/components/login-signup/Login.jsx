import React from 'react'
import { Link } from 'react-router-dom';
import { setUser } from '../../utils/localStorage';

const Login = () => {
  const onSubmitClick = () =>{
    setUser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE4Y2JhNzhlNmQ5YzA3MzBhMTk1YTciLCJpYXQiOjE3MDU2NTQxNzcsImV4cCI6MTcwNTc0MDU3N30.J5-kqJpzJ3tKiJoum35mxyrZGnRSl8cIH3ZzU82m-fw")
  }
  return (
    <div className='login flex flex-col items-center w-full p-2 gap-6 py-5'>
      <div className="relative h-11 w-[60%] min-w-[200px]">
        <input
          placeholder="email"
          className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
        />
        <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>

      <div className="relative h-11 w-[60%] min-w-[200px]">
        <input
          placeholder="Password"
          className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
        />
        <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>
      </div>

      <div className='text-center text-sm text-white'>
        Don't have an Account ? <Link className="text-blue-300" to="/register">Sign Up</Link>

      </div>

      <div className='Submitbtn text-center'>
        <button
          className="bg-[#7864F4] hover:bg-[#6a54f8] text-white font-semibold py-2 px-4 rounded"
          type="button"
          onClick={()=>onSubmitClick()}
          >Submit</button>
      </div>
    </div>
  )
}

export default Login
