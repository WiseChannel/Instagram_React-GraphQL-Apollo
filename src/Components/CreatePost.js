import React, { useState, useRef } from 'react'

const CreatePost = ({ user, setPosts, posts }) => {

    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const imageInputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const post = { content, image, user }
        const newPost = [post, ...posts]
        setPosts(newPost)
        setContent('')
        imageInputRef.current.value = ''
    }

    return (
        <div>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Add Post Content'
                    onChange={e => setContent(e.target.value)}
                    value={content}
                />
                <input 
                    type='file' 
                    onChange={e => setImage(e.target.files[0])}
                    value={image}
                    ref={imageInputRef}
                />
                <button type='submit'>Submit Form</button>
            </form>
            
        </div>
    )
}

export default CreatePost