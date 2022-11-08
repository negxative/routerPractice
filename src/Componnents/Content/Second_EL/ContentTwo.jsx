import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const ContentTwo = () => {
  const id="abx";
  
  return (
    <>
    <div>
        SOME CONTENT for 2 element.
    </div>
    <div>
      <ul>
        <li>
          <Link to={`books/${id}` }>Books</Link>
        </li>
        <li>
           <Link to={`movies/${id}`} >Movies</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
   </>
  )
}
