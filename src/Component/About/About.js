import React from 'react'
import "./style.css"
const About = () => {
  return (
    <div id='about'>
<h1 className='heading text-center heading1'><strong>About</strong></h1>
    <div className='about container '>

        <div className='w-50 text '>
<h1 className='heading'><strong>Who I'm</strong> </h1>
<p>
I m' Salman ilyas from pakistan
<br/>
i can make ecommers and other webside in react in frontend and node.js in backend and database is mysql and mongodb
for styling i use bootstrap,talwind-css,Scss ,normal css and other technology for frontand i use react.js and normal javascript and other framworks forexamlpe lodash , emailjs and react-helmet-async etc
i also use redux-toolkit for create store in react and for back-end i m using node.js with mysql
</p>

        </div>
        <div className='image-section'>
        <div className='image'>
        </div>
<img src='image/1.jpg' className='images' alt='' />
        </div>
      

    </div>
    </div>

  )
}

export default About