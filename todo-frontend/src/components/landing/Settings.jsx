import React, { useState } from 'react'

const Settings = () => {
  const [isEditable, setIsEditable ] = useState(false);
  const isEditClicked = () => {
    setIsEditable(!isEditable);
  }
  const [user, setUser] = useState({
    firstName: "Sairam",
    lastName: "Ramavath",
    email: "sairam@gmail.com",
    phoneNumber: "9390708854",
    password: "*********"
  })
  const handleInputChange = (fieldName, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };

  return (
    <div className='flex flex-col gap-4 w-[60%] mx-auto justify-center py-6'>
      <div className='flex justify-center gap-5 items-center'>
        <div className='text-2xl text-bold'>User Profile Information</div>
        <div className='text-xl cursor-pointer'
          onClick={() => isEditClicked()}
        >
          <i className="bi bi-pencil-square"></i>
        </div>
      </div>
      <div className='flex flex-col gap-3 w-full'>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col gap-2 w-2/5'>
            <label> First Name </label>
            <input type='text' value={user.firstName} disabled={!isEditable}
              className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
            />
          </div>
          <div className='flex flex-col gap-2 w-2/5'>
            <label> Last Name </label>
            <input type='text' value={user.lastName} disabled={!isEditable}
              className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
            />
          </div>
        </div>

        <div className='flex justify-between w-full'>
          <div className='flex flex-col gap-2 w-2/5'>
            <label> Email </label>
            <input type='email' value={user.email} disabled={!isEditable}
              className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
            />
          </div>
          <div className='flex flex-col gap-2 w-2/5'>
            <label> Phone Number </label>
            <input type='text' value={user.phoneNumber} disabled={!isEditable}
              className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
            />
          </div>
        </div>

        <div className='flex gap-5 w-full'>
          <div className='flex flex-col gap-2 w-2/5'>
            <div className='flex flex-col gap-2'>
              <label> Password </label>
              <input type='password' value={user.password} disabled={true}
                className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
              />
            </div>
            <div className='flex items-end text-xs text-sky-300 cursor-pointer'>
              Change Password
            </div>
          </div>

        </div>

        <div className='flex justify-center pt-8'>
          <button className="bg-[#7864F4] hover:bg-[#6a54f8] text-white font-semibold text-sm py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
