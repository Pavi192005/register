import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  return (
    <>
    <div>
      <h2>User Registration Preview</h2>

            
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                </div>
                
                <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                </div>

                 <h3>Registration Details</h3>

            <p>Name: {name}</p>
            <p>Email: {email}</p>
            
    </>
  )
}

export default Register
