import React from 'react'
import "./style.css"
import {BsLinkedin ,BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
const HeroSection = () => {
  return (
    <div >
        <div className='herosection'>
            <p>let's built some thing toGetHer</p>
            <h1><strong>  Hi, I'm <span className='name'> Salaman ilyas</span></strong></h1>
            <h1><strong> A Full-Stack Web Developer</strong></h1>
            <p className='text-center'>i'm a full stack web developer. <br/> i can make a webside  in react.js,next.js and also Redux  in frontend and node.js in backend and<br/> for styling i use bootstrap,react-bootstrap,talwind-css,Scss and css </p>
            <div className='mt-5'>
                <a href='!#' className='rounded-circle m-2 p-3 px-3  shadow'><BsLinkedin/></a>
                <a href='!#' className='rounded-circle m-2 p-3 px-3 text-black shadow'><BsGithub/></a>
                <a href='!#' className='rounded-circle m-2 p-3 px-3 text-warning  shadow'><MdEmail/></a>
            </div>
        </div>

    </div>
  )
}

export default HeroSection