import React, { useState } from 'react'

const Login = ({setUser}) => {

    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(username)
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setUsername(e.target.value)} placeholder='Input username' />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default Login