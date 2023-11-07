import React, { useState } from 'react'
import "../../App.css"
import {
  FaBars,
  FaBookOpen,
  FaBookmark,
  FaHome,
  FaPhoneAlt,
  FaRegChartBar,
  FaTh, FaUserAlt,
} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) => {
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=> setIsOpen(!isOpen);
    const menuItem=[
      {
        path:"/",
        name:"Home",
        icon:<FaHome/>
      },
      {
        path:"/discussion",
        name:"Discussion",
        icon:<FaRegChartBar/>
      },
      {
        path:"/placement",
        name:"Placement",
        icon:<FaBookmark/>
      },
      {
        path:"/onlinetest",
        name:"Online Test",
        icon:<FaBookOpen/>
      },
      {
        path:"/about",
        name:"About",
        icon:<FaUserAlt/>
      },
      {
        path:"/contact",
        name:"Contact",
        icon:<FaPhoneAlt/>
      },
    ]

  return (
  
     <div className='container'>
      <div style={{width:isOpen? "250px":"50px"}} className='sidebar'>
        <div className='top_section'>
          <h1 style={{display:isOpen? "block":"none"}} className='logo'>Logo</h1>
          <div style={{marginLeft:isOpen? "100px":"0px"}}className='bars'>
              <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className='icon'>{item.icon}</div>
              <div style={{display:isOpen? "block":"none"}}className='link_text'>{item.name}</div>
            </NavLink>          
            ))
        }

      </div>
     <main>{children}</main>
     </div>
      
    
  )
}

export default Sidebar