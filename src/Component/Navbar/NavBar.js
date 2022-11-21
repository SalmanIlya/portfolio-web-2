import React from 'react'
import "./style.css"
const NavBar = () => {
  const item=()=>{
    const element=document.getElementById("")
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <div className='bg-white fixed-top '>
    <nav className="navbar navbar-expand-lg navbar-light container">
      <p>nav</p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto text-np">
      <li className="nav-item  active nav-link ps-3 m-1 shadow " onClick={()=>{
          const element=document.getElementById("home")
          if(element){
            element.scrollIntoView({behavior:"smooth"})
          }
      }}> Home </li>
      <li className="nav-item  active nav-link ps-3 m-1 shadow " onClick={()=>{
          const element=document.getElementById("about")
          if(element){
            element.scrollIntoView({behavior:"smooth"})
          }
      }}> About </li>
      <li className="nav-item active nav-link ps-3   m-1 shadow "
      onClick={()=>{
        const element=document.getElementById("skill")
        if(element){
          element.scrollIntoView({behavior:"smooth"})
        }
    }}
      > Skills </li>
      <li className="nav-item active nav-link m-1  shadow " onClick={()=>{
          const element=document.getElementById("project")
          if(element){
            element.scrollIntoView({behavior:"smooth"})
          }
      }}> Projects </li>
      <li className="nav-item  active nav-link m-1 shadow " 
      onClick={()=>{
        const element=document.getElementById("rusuma")
        if(element){
          element.scrollIntoView({behavior:"smooth"})
        }
    }}
      > Rusuma </li>
      <li className="nav-item  active nav-link m-1  shadow " onClick={()=>{
          const element=document.getElementById("contact")
          if(element){
            element.scrollIntoView({behavior:"smooth"})
          }
      }}> Contact </li>
   
     
    </ul>
  
  </div>
</nav>
    </div>
  )
}

export default NavBar