
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Account from '../components/Account'


export default function Signup() {
  return (
    <motion.div      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', delay: 0, duration: 1 }}
    >
        <div>                    
        <h1>Sign Up!</h1>        
        <Account actiontype='signup' />
        </div>      
      <Link to='/signin'>Alread have an account? Click here. </Link>
    </motion.div>
  )
}
