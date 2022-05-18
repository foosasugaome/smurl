import React, { useState } from 'react'
import axios from 'axios'
import CopyURL from '../components/CopyURL'
import About from '../components/About'

export default function Main () {
  const [form, setForm] = useState({
    url: ''
  })
  const [smurl, setSmurl] = useState('')
  const [message, setMessage] = useState('')
  const [showSmurl, setShowSmurl] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
    setMessage('')
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1`,
        form
      )
      const smurl = response.data
      setSmurl(`${process.env.REACT_APP_DOMAIN}/${smurl.url}`)
      setShowSmurl(true)
    } catch (error) {
      setShowSmurl(false)
      setMessage('An error occured. Please try again later.')
    }
  }
  return (
    <>
      <div className='container-title'>
        <h1 className='title'>Small URL</h1>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Paste your long URL here'
            value={form.url}
            onChange={e => setForm({ ...form, url: e.target.value })}
          />
          <button>Send</button>
        </form>
        {message}
      </div>
      {showSmurl ? (
        <div className='container'>
          <CopyURL url={smurl} />
        </div>
      ) : null}
    </>
  )
}
