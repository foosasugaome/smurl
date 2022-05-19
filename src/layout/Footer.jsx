import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <div className='footer'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}
