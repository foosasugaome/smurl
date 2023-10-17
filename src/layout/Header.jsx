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
