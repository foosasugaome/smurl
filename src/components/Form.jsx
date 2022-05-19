import React from 'react'
import axios from 'axios'

export default function Form({ form, setForm, setMessage, setLoading, setSmurl, setShowSmurl }) {
    const handleSubmit = async e => {
        e.preventDefault()
        setMessage('')
        
        var URL = form.url
        if(URL.substring(0,8) !== 'https://' && URL.substring(0,7) !== 'http://') {
          form.url= `http://${form.url}`
        }
    
        try {
          setLoading(true)
          const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/v1`,
            form
          )
          const smurl = response.data
          setSmurl(`${process.env.REACT_APP_DOMAIN}/${smurl.url}`)
          setLoading(false)
          setShowSmurl(true)      
        } catch (error) {
          setLoading(false)
          setShowSmurl(false)
          setMessage(`Oops! That's embarrasing. Something went wrong. Please try again later.`)
        }
      }
    return (
    <>
    <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Paste your long URL here'
              value={form.url}
              onChange={e => setForm({ ...form, url: e.target.value })}       
              required                     
            />
            <button>Send</button>
    </form>
    </>
  )
}
