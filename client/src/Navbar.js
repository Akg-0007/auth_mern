import React from "react";
import { useState } from "react";
import Notification from "./Notification";
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const [data,setData]=useState();
  const navigate = useNavigate()
  const getUserDetails = async () => {
       
    try {
        const res = await axios.get('https://scoutverse.onrender.com/auth/me', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        console.log(res)
        localStorage.setItem('userDetails', JSON.stringify(res.data))
        setData(res.data)

    } catch (err) {
        console.log(err)
        if (err.request.status === 500) {
            navigate('/signin')
        }
    }
}
const handleLogout = async () => {
    localStorage.removeItem("token")
    navigate('/signin')
}
useEffect(() => {
    getUserDetails()
}, [])
console.log(data);
  const [showModal , setShowModal]=useState(false);
    const openModal =()=>{
        setShowModal(true);
    };
    const closeModal =()=>{
        setShowModal(false);
    };
  return (
    <div>
        {showModal && <Notification setShowModal={setShowModal}/>}
      <div id="nav">
        <div id="nav-part1">
          <h1>Scout Verse Co.</h1>
        </div>
        <div id="nav-part2">
          <div id="links">
            <a href="#" onClick={()=>navigate("/shop")}>Shop</a>
            <a href="#" onClick={()=>navigate("/events")}>Events</a>
            <a href="#" onClick={()=>navigate("/games")}>Games</a>
            <a href="#" onClick={()=>navigate("/donate")}>Donate</a>
          </div>
          <div id="icons" onClick={()=>{
                if(showModal){
                    closeModal();
                }else{
                    openModal();
                }
            }} >
            <h1>{data && data.firstname}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
