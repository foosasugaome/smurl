import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <div className='footer'>
      <Link to='/'>Home</Link>
      <Link to='/about'>What is a SmURL? </Link>      
      <Link to='/sendmecoffeemoney'>Buy me coffee!</Link>
    </div>
  )
}

