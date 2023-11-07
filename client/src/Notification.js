import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Notification = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    localStorage.removeItem("token")
    navigate('/signin')
}
const [data,setData]=useState();
const getUserDetails = async ()=>{
  try{
    const res= await axios.get('http://localhost:5500/auth/me', {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
  })
  console.log(res)
  localStorage.setItem('userDetails', JSON.stringify(res.data))
  setData(res.data)
  }
  catch (err) {
    console.log(err)
    if (err.request.status === 500) {
        navigate('/signin')
    }
}
}
useEffect(() => {
  getUserDetails()
}, []);
  return (
    <div className="si">
      <div className="notification">
      <div className="notification-heading">
        <span className="notification-content">{data && data.firstname}{data && data.lastname}</span>
      </div>

      <div className="notification-section">
        <div className="man-logo">
        <img src={data && data.profileLink} alt="none" />
        </div>
        <div className="message-section">
          <div className="message-section-content">
            <p>
              <span className="section-content">New Assignment available</span>
              <span className="subject-name">
                “ INT407 ” : “Chapter 1 & Chapter 2”
              </span>
            </p>
          </div>
          <div className="message-section-content-2">
            <span className="section-content-2">a few moments ago</span>
            <span className="section-btn">New</span>
          </div>
        </div>
      </div>

      <div className="notification-section">
        <div className="man-logo">
        <img src={data && data.profileLink} alt="none" />
        </div>
        <div className="message-section">
          <div className="message-section-content">
            <p>
              <span className="section-content">New Assignment available</span>
              <span className="subject-name">
                “ INT407 ” : “Chapter 1 & Chapter 2”
              </span>
            </p>
          </div>
          <div className="message-section-content-2">
            <span className="section-content-2">a few moments ago</span>
            <span className="section-btn">New</span>
          </div>
        </div>
      </div>

      <div className="notification-section">
        <div className="man-logo">
        <img src={data && data.profileLink} alt="none" />
        </div>
        <div className="message-section">
          <div className="message-section-content">
            <p>
              <span className="section-content">New Assignment available</span>
              <span className="subject-name">
                “ INT407 ” : “Chapter 1 & Chapter 2”
              </span>
            </p>
          </div>
          <div className="message-section-content-2">
            <span className="section-content-2">a few moments ago</span>
            <span className="section-btn">New</span>
          </div>
        </div>
      </div>
      <div className="notification-section">
        <div className="man-logo">
        <img src={data && data.profileLink} alt="none" />
        </div>
        <div className="message-section">
          <div className="message-section-content">
            <p>
              <span className="section-content">New Assignment available</span>
              <span className="subject-name">
                “ INT407 ” : “Chapter 1 & Chapter 2”
              </span>
            </p>
          </div>
          <div className="message-section-content-2">
            <span className="section-content-2">a few moments ago</span>
            <span className="section-btn">New</span>
          </div>
        </div>
      </div>

      <div className="notification-section">
        <div className="man-logo">
        <img src={data && data.profileLink} alt="none" />
        </div>
        <div className="message-section">
          <div className="message-section-content">
            <p>
              <span className="section-content">New Assignment available</span>
              <span className="subject-name">
                “ INT407 ” : “Chapter 1 & Chapter 2”
              </span>
            </p>
          </div>
          <div className="message-section-content-2">
            <span className="section-content-2">a few moments ago</span>
            <span className="section-btn">New</span>
          </div>
        </div>
      </div>
      <div className="view-all">
        <div>
          {/* <img src={eye} alt="eye" /> */}
        </div>
        <div className="view-all-btn" onClick={handleLogout}>View All</div>
      </div>
    </div>
    </div>
  );
};

export default Notification;