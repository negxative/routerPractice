import React from 'react'
import { useParams } from 'react-router-dom'
  
export const Books = () => {
const  {id}=useParams();
  return (
    <div>This Displays Books-{id} </div>
  )
}
