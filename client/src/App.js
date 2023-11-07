import './App.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

import Events from './Events';
import Games from "../src/Pages/Games"
import Donate from "../src/Pages/Donate"
import Shop from "../src/Pages/Shop"
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the necessary components and specify the type of router you want to use
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
// import SignIn from './Pages/SignIn';
import UpdateProfile from './Pages/UpdateProfile';
import Login from './Login';
import Signup from './SignUp';

function App() {
  useEffect(() => {
    // Locomotive Scroll initialization and setup
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Video container animation
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });

    // Loading animation
    gsap.from("#page1 h1", {
      y: 100,
      // opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });

    gsap.from("#page1 #video-container", {
      scale: 0.9,
      // opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });

    // Cursor animation
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });

    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });

      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }, []);

  return (

   <ChakraProvider theme={theme}>
      <Router> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/updateprofile' element={<UpdateProfile />} />
          <Route path='/events' element={<Events/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/games' element={<Games/>}/>
          <Route path='/donate' element={<Donate/>}/>
          <Route path='home' element={<Home/>}/>

        </Routes>
      </Router>
    </ChakraProvider>

   
  );
}

export default App;




    
