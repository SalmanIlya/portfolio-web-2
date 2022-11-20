import React from 'react'
import {BsLinkedin ,BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {FiInstagram} from "react-icons/fi"
import "./style.css"
const Contact = () => {
  return (
    <div>
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
<div className=' mt-5 p-3'>
<a href='!#' className='rounded-circle m-2 p-3 px-3  shadow'><BsLinkedin/></a>
                <a href='!#' className='rounded-circle m-2 p-3 px-3 text-black shadow'><BsGithub/></a>
                <a href='!#' className='rounded-circle m-2 p-3 px-3 text-warning  shadow'><MdEmail/></a>
                <a href='!#' className='rounded-circle m-2 p-3 px-3 text-danger shadow'><FiInstagram/></a>
</div>
</div>

</div >
<div className='box2 d-flex flex-column bg-light p-5 shadow'>
<input className='m-3 rounded input' type="text" placeholder="Full-Name" />
<input className='m-3 rounded input' type="text" placeholder="Email" />
<input className='m-3 rounded input' type="text" placeholder="Subject" />

<textarea className='textarea rounded' placeholder='Please Enter Your Massage...' rows={5} cols={9}/>
<button className='btn1'>Send Massage</button>
</div>
</div>
    </div>
  )
}

export default Contact