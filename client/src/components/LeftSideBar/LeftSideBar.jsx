import React from 'react'
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSideBar = () => {

  return (

    <div className='left-side-bar'>

      <div className="side-bar">

        <NavLink to='/' className='side-nav-link' activeclassname='active'>
          <p>Home</p>
        </NavLink>


        <div className="side-bar-div">

          <div><p>PUBLIC</p></div>

          <NavLink to='/Questions'className='side-nav-link' activeclassname='active' >

          <img src={Globe} alt="Globe" />
          <p style={{paddingLeft:"10px"}}>Questions</p>
          </NavLink>

          <NavLink to='/Tags' className='side-nav-link' activeclassname='active' style={{paddingLeft:"40px"}}>
            <p>Tags</p>
          </NavLink>

          <NavLink to='/Users' className='side-nav-link' activeclassname='active' style={{paddingLeft:"40px"}}>
            <p>Users</p>
          </NavLink>

        </div>

      </div>

    </div>
  )
}

export default LeftSideBar