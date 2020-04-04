import React, { useState } from 'react'

export const ValueUnput = () => {

    const [state, setState] = useState('')

    const handleChange = (e) => {
        setState(e.target.value)
    }
    

    return (
        <>
            <input onChange={handleChange} />
            <p>{state}</p>
        </>
    )
}