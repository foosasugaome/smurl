import React, { useState } from 'react'
import CopyURL from '../components/CopyURL'
import { motion } from 'framer-motion'
import './Main.css'
import LoadingMessages from '../components/LoadingMessages'
import Form from '../components/Form'

export default function Main () {
  const [form, setForm] = useState({
    url: ''
  })  

  const [smurl, setSmurl] = useState('')
  const [message, setMessage] = useState('')
  const [showSmurl, setShowSmurl] = useState(false)
  const [loading, setLoading] = useState(false)  

  return (
    <>
      <motion.div
        className='container-landing'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: 0, duration: 1 }}
      >
        <div className='container-title'>
          <h1 className='title'>Small URL</h1>
        </div>
        <div className='container-field'>          
          <Form form={form} setForm={setForm} setMessage={setMessage} setLoading={setLoading} setSmurl={setSmurl} setShowSmurl={setShowSmurl} />
        </div>
        <div className='container-field'>
          <h2>{message}</h2>
        </div>                
        {loading
          ?
          <div className='container-field'><h3><LoadingMessages /></h3></div>
          :
          null
        }
        {showSmurl ? (
          <div className='container-field'>
            <CopyURL url={smurl} />
          </div>
        ) : null}
      </motion.div>
    </>
  )
}
