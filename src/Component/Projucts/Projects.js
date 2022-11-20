import React  from 'react'
import "./style.css"
const Projects = () => {
    const data=[
        {
            id:1,
            image:"web/1.png",
            title:"Portfolio webside 1",
            link:"https://dainty-bublanina-2a12a5.netlify.app/",
            github:"https://github.com/SalmanIlya/portfolio-webside"
        },
        {
            id:2,
            image:"web/2.png",
            title:"Ecommers webside ",
            link:"https://elaborate-dasik-dc605a.netlify.app/",
            github:"https://github.com/SalmanIlya/Dump-Ecommers-Webside"
        },
        {
            id:3,
            image:"web/3.png",
            title:"Portfolio webside 2",
            link:"https://tubular-gumdrop-1f820d.netlify.app/",
            github:"https://github.com/SalmanIlya/portfolio-web-2"
        },
        {
            id:4,
            image:"web/4.png",
            title:"Admin dashboard",
            link:"https://dashing-parfait-7fab26.netlify.app/",
            github:"https://github.com/SalmanIlya/dashbord"
        },
    ]
  return (
    <div id='project'>
        <h1 className='heading text-center heading1'><strong>Projects</strong></h1>
<div className='d-flex flex-row flex-wrap  container mt-5'>
{
    data.map((item)=>{
        return (
            <div className='m-3 shadow mt-5 card bg-light' key={item.id}>
                 <div className='p-box'>
                <img src={item.image} className=" img "/>
                </div>
                <div className='box-div card-body'>
                    <h3>{item.title}</h3>
                    <div>
                    <a className='link' href={item.github}><button className='btn' >Visit GitHub</button></a>
                    <a className='link' href={item.link}>  <button className='btn' >visit Webside</button></a>
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