import React from 'react'
import  "./Navbar.css"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav>
          <ul>
              <li>
              <Link to={"/"}>1st Element</Link>
              </li>
              <li>
              <Link to={"/second"}>2nd Element</Link>
              </li>
              <li>
              <Link to={"/third"}>3rd Element</Link>
              </li>
              <li>
              <Link to={"/fourth"}>4th Element</Link>
              </li>
          </ul>
          
      </nav>
  )
}
