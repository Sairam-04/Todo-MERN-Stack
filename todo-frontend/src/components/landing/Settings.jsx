import React, { useEffect, useState } from 'react'
import { endpoint } from '../constants/url';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getService from '../../services/getService';
import postService from '../../services/postService';
import putService from '../../services/putService';
import { getUser } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  if(getUser() === null){
    navigate("/login")
  }
  const [isEditable, setIsEditable] = useState(false);

  const [user, setUser] = useState({})
  const [sq, setSQ] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [userDataErrors, setUserDataErrors] = useState({});
  const isChangePasswordClick = () => {
    setIsChangePassword(!isChangePassword)
  }
  const [resetMsg, setResetMsg] = useState("")
  const [passwordResetData, setPasswordResetData] = useState({
    answer: "",
    newPassword: ""
  })
  const isEditClicked = () => {
    setIsEditable(!isEditable);
    setUserDataErrors({})
  }
  const handlePasswordDChange = (e) => {
    const { name, value } = e.target;
    setPasswordResetData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  }

  const validateSignUp = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is Required";
    } else if (values.name.length < 3) {
      errors.name = "Name Should have atleast 3 characters"
    } else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
      errors.name = "Name must contain only letters and spaces";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is Required";
    } else if (!/^\d+$/.test(values.phoneNumber)) {
      errors.phoneNumber = "Phone number must contain only digits";
    } else if (values.phoneNumber.length < 10 || values.phoneNumber.length > 10) {
      errors.phoneNumber = "Phone Number must contain only 10 digits"
    }
    return errors;
  };

  const ResetPassword = async () => {
    try {
      const response = await postService(
        `${endpoint}/reset-password`,
        passwordResetData,
        true
      );
      if (response && response.statusText === "OK") {
        if (response?.data?.success) {
          setPasswordResetData({
            answer: "",
            newPassword: ""
          })
          isChangePasswordClick();
          toast.success("Password Reset Successfull");
        } else {
          setResetMsg(response?.data?.message)
          toast.error("Password Reset Unsuccessfull");
        }
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {

    }
  }
  const getUserDetails = async () => {
    try {
      const response = await getService(
        `${endpoint}/me`,
        true
      );
      if (response && response.statusText === "OK") {
        if (response?.data?.success) {
          setUser({
            name: response.data?.user?.name || "",
            email: response.data?.user?.email || "",
            phoneNumber: response.data?.user?.phoneNumber || "",
            password: "*********"
          });
          setSQ(response.data?.user?.securityQuestion.question);
        } else {
          toast.error("Something Went Wrong");
        }
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (err) {
      toast.error("Something Went Wrong");

    }
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const onDataSubmit = () => {
    setUserDataErrors(validateSignUp(user));
    setIsSubmit(true);
  };

  const ChangeUserDetails = async () => {
    try {
      const response = await putService(
        `${endpoint}/update-me`,
        user,
        true
      );
      if (response && response.statusText === "OK") {
        if (response?.data?.success) {
          toast.success("Successfully Updated Details")
        } else {
          toast.error("Not able to update the User");
        }
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      toast.error("Something Went Wrong");

    }
  }

  useEffect(() => {
    getUserDetails();
  }, [isEditable]);

  useEffect(() => {
    if (Object.keys(userDataErrors).length === 0 && isSubmit && isEditable) {
      ChangeUserDetails();
    }
  }, [isSubmit, userDataErrors]);

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
            <label> Name </label>
            <input type='text' value={user.name} disabled={!isEditable}
              onChange={handleInputChange} name='name'
              className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
            />
            <p className='text-xs text-red-600'>
              {userDataErrors.name}
            </p>
          </div>
          <div className='flex flex-col gap-2 w-2/5'>
            <label> Email </label>
            <input type='email' value={user.email} disabled={!isEditable}
              onChange={handleInputChange} name='email'
              className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
            />
            <p className='text-xs text-red-600'>
              {userDataErrors.email}
            </p>
          </div>
        </div>

        <div className='flex justify-between w-full'>
          <div className='flex flex-col gap-2 w-2/5'>
            <label> Phone Number </label>
            <input type='text' value={user.phoneNumber} disabled={!isEditable}
              onChange={handleInputChange} name='phoneNumber'

              className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
            />
            <p className='text-xs text-red-600'>
              {userDataErrors.phoneNumber}
            </p>
          </div>
          {
            !isChangePassword && (
              <div className='flex flex-col gap-2 w-2/5'>
                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-col gap-2'>
                    <label> Password </label>
                    <input type='password' value={user.password} disabled={true}
                      className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
                    />
                  </div>
                  <div
                    onClick={() => isChangePasswordClick()}
                    className='flex items-end text-xs text-sky-300 cursor-pointer'>
                    Change Password
                  </div>
                </div>
              </div>
            )
          }
        </div>

        {
          isChangePassword && (
            <div className='w-full flex flex-col gap-3'>
              <div>
                Security Question :
              </div>
              <div>
                {sq}
              </div>
              <div className='flex gap-2 items-end'>
                <div className='flex flex-col gap-2 w-2/5'>
                  <label> Answer </label>
                  <input type='text'
                    name='answer'
                    value={passwordResetData.answer}
                    onChange={handlePasswordDChange}
                    className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
                  />
                </div>
                <div className='flex flex-col gap-2 w-2/5'>
                  <label> New Password </label>
                  <input type='password'
                    name='newPassword'
                    value={passwordResetData.newPassword}
                    onChange={handlePasswordDChange}
                    className="py-2 text-sm text-white bg-[#2A2D33] disabled:opacity-50 rounded-lg px-2 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]"
                  />
                </div>
              </div>
              {
                resetMsg && (
                  <div className='text-red-700 text-lg'>
                    {resetMsg}
                  </div>
                )
              }
              <div className='flex gap-3'>
                <button
                  onClick={() => ResetPassword()}
                  className="bg-[#7864F4] hover:bg-[#6a54f8] text-white font-semibold text-sm py-2 px-4 rounded"
                >Save Password</button>
                <button
                  onClick={() => isChangePasswordClick()}
                  className="bg-[#f46464] hover:bg-[#f85454] text-white font-semibold text-sm py-2 px-4 rounded"
                >Cancel</button>
              </div>
            </div>
          )
        }
        <div className='flex justify-center pt-4'>
          <button
            onClick={() => onDataSubmit()}
            className="bg-[#7864F4] hover:bg-[#6a54f8] text-white font-semibold text-sm py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
