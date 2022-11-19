import React, { useState } from 'react'
import "./style.css"
const Projects = () => {
    const Data=[
        {
            id:1,
            image:"",
            title:"E-commers-webside-frontend",
            link:"",
            githubLink:""
        },
        {
            id:2,
            image:"",
            title:"Bootstrap-Ecommers-Webside",
            link:"",
            githubLink:""
        },
        {
            id:3,
            image:"",
            title:"Admin-Dashbord",
            link:"",
            githubLink:""
        },
        {
            id:4,
            image:"",
            title:"Portfolio-webside",
            link:"",
            githubLink:""
        }

    ]
    const [item,setitem]=useState(Data)
console.log(item);
  return (
    <div>
        <h1 className='heading text-center heading1'><strong>Projects</strong></h1>



<div className='projects'>
{
item.map((item)=>{
    return(
        <div class=" card-tem card shadow" >
  <img class="card-img-top" src="image/1.jpg" alt="Card image cap"/>
  <div class="card-body bg-light">
    <h5 class="card-title">{item.title}</h5>
    <div className='d-flex justify-content-between'>
    <button>visit now</button>
    <button>visit github</button>
    </div>
  </div>
</div>
    )
})
}
</div>

    </div>
  )
}

export default Projects