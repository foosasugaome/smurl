import React from 'react'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', delay: 0, duration: 0.8}} className='fullscreen-container'>About</motion.div>
  )
}
