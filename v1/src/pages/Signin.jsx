
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Account from '../components/Account'

export default function Signin () {
  return (
    <motion.div      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', delay: 0, duration: 1 }}
    >
        <div>                    
        <h1>Welcome back!</h1>        
        <Account actiontype='signin' />
        </div>      
      <Link to='/signup'>Need an account? Click here. </Link>      
    </motion.div>
  )
}
