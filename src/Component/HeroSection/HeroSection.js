import React from 'react'
import "./style.css"
import {BsLinkedin ,BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {FiInstagram} from "react-icons/fi"
import {SiWhatsapp} from "react-icons/si"

import Typed from "typed.js";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Salaman ilyas","full stack web developer","Salaman ilyas"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div id='home'>
     
      <div className='w-25 h-50'></div>
        <div className='herosection'>
            <p>let's built some thing toGetHer</p>
            <h1><strong>  Hi, I'm <span className='name'>{/* Element to display typing strings */}
      <span ref={el}></span> </span></strong></h1>

            <h1><strong> A Full-Stack <span className='name'> Web Developer</span></strong></h1>
            <p className='text-center'>i'm a full stack web developer. <br/> i can make a webside  in react.js,next.js and also Redux  in frontend and node.js in backend and<br/> for styling i use bootstrap,react-bootstrap,talwind-css,Scss and css </p>
            <div className='mt-5'>
                <a href='!#' className='rounded-circle m-2 p-3 px-3  shadow'><BsLinkedin/></a>
                <a href='!#' className='rounded-circle m-2 p-3 px-3 text-black shadow'><BsGithub/></a>
                <a href='!#' className='rounded-circle m-2 p-3 px-3 text-warning  shadow'><MdEmail/></a>
                <a href='!#' className='rounded-circle m-2 p-3 px-3 text-danger shadow'><FiInstagram/></a>
                <a href='https://wa.me/+92300-0516714' className='rounded-circle m-2 p-3 px-3 text-success shadow'  ><SiWhatsapp/></a>
            </div>
        </div>

    </div>
  )
}

export default HeroSection