import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-white'>
    <nav className="navbar navbar-expand-lg navbar-light container">
  <a className="navbar-brand " href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto text-np">
      <li className="nav-item active nav-link"> Home </li>
      <li className="nav-item active nav-link"> About </li>
      <li className="nav-item active nav-link"> Skills </li>
      <li className="nav-item active nav-link"> Projects </li>
      <li className="nav-item active nav-link"> Contact </li>
   
     
    </ul>
  
  </div>
</nav>
    </div>
  )
}

export default NavBar