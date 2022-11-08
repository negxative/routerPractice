import React from 'react'
import { useParams } from 'react-router-dom'

export const MOvies = () => {
    const {id}=useParams();
  return (
    <div>This displays movies- {id}</div>
  )
}
