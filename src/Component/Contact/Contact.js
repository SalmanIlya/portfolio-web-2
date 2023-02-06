import React, { useRef } from 'react'
import {BsLinkedin ,BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {FiInstagram} from "react-icons/fi"
import emailjs from '@emailjs/browser';
import "./style.css"
import Emailjs from './Email';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6iuibih', 'template_lpmc5w8', form.current, 'rg40cSYbh5fmGh9iG')
      .then((result) => {
          console.log("oh");
      }, (error) => {
          console.log("error");
      });
  };

  return (
    <div id='contact'>
<h1 className='heading text-center heading1'><strong>Contact us</strong></h1>
<div className='main-box container'>
<div className='box1 d-flex flex-column bg-light shadow aline-center'>
<img src='image/2.jpg' className='contact-image' /> 
<div className='flex flex-column justify-content-between m-3'>
<div >
<h3><strong>Name Here</strong></h3>
<p>Full-Stack Developer
    <br/>
    i am available for freelance or full time  positions <br/>
    Contact me and let's talk
</p>
</div>
<div className=' mt-5 p-3 d-flex flex-row justify-content-center align-items-center bg-light '>
<a href='!#' className='rounded-circle m-1 p-2 px-3  shadow'><BsLinkedin/></a>
                <a href='!#' className='rounded-circle m-1 p-2 px-3 text-black shadow'><BsGithub/></a>
                <a href='!#' className='rounded-circle m-1 p-2 px-3 text-warning  shadow'><MdEmail/></a>
                <a href='!#' className='rounded-circle m-1 p-2 px-3 text-danger shadow'><FiInstagram/></a>
</div>
</div>

</div >
<div className='box2 d-flex flex-column justify-content-center align-items-center bg-light p-5 shadow'>
   <Emailjs/>
</div>
</div>
    </div>
  )
}

export default Contact