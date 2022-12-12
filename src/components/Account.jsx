import React from 'react'

export default function Account({ actiontype }) {
    const handleSubmit = async e => {
        e.preventDefault()    
      }    
      return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' required />
        <input type='password' placeholder='Password' required />
        <button>Submit</button>
    </form>
    </>
  )
}
