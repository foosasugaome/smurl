import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <>
      <nav className='relative mx-auto p-6'>
        <div className='flex items-center justify-between space-between'>
          <div className='pt-2'>
            <img src='logo_2.png' className='h-8' alt='' />
          </div>

          <div className='hidden md:flex space-x-6'>
            <Link to='/' className='hover:text-viridian font-bold'>
              Home
            </Link>
            <Link to='/about' className='hover:text-viridian font-bold'>
              About
            </Link>
            <Link to='/about' className='hover:text-viridian font-bold'>
              Contact
            </Link>
          </div>

          {/* hamburger icon */}
          <div
            id='menu-btn'
            className='block hamburger md:hidden focus:outline-none'
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </div>
        </div>
        {/* mobile menu */}
        {/* <div className='md:hidden'> */}
        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div
            id='menu'
            className='absolute top-0 right-0 px-8 py-8 flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
            onClick={() => setIsNavOpen(false)}
          >
            <Link to='/' className='hover:text-viridian font-bold'>
              Home
            </Link>
            <Link to='/about' className='hover:text-viridian font-bold'>
              About
            </Link>
            <Link to='/about' className='hover:text-viridian font-bold'>
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  )
}
