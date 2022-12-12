import React from 'react'

export default function NewAccount() {
  const handleSubmit = async e => {
    e.preventDefault()    
  }

  return (
<>
<form onSubmit={handleSubmit}>    
    <input type='text' placeholder='First name' required/>
    <input type='text' placeholder='Last name' required/>
    <button>Submit</button>
</form>
</>
  )
}
