import React, { useEffect } from 'react'

import { addPost } from './Api';

const Create = () => {

    const handlesubmit = async (e) => {
        e.preventDefault();
        var title = document.getElementById('title').value
        var msg = document.getElementById('msg').value
        addPost({ title, msg })
    }

    return (
        <div className='container'>
            <h2>add Post</h2>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name='title' id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="msg" className="form-label">Message</label>
                    <input type="text" className="form-control" name='msg' id="msg" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Create
