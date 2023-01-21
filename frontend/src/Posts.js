import React, { useEffect, useState } from 'react'
import { dislikePost, getPosts, likePost } from './Api';

const Posts = () => {

    const [Posts, SetPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then(data => {
                SetPosts(data);
                console.log("data", data);
            });
    }, []);



    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">SNo</th>
                        <th scope="col">Title</th>
                        <th scope="col">Message</th>
                        <th scope="col">Time</th>
                        <th scope='col'>Likes</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Posts.map((post) => (
                            <tr key={post.sno}>
                                <td scope="row">{post.sno}</td>
                                <td>{post.title}</td>
                                <td>{post.msg}</td>
                                <td>{post.date_created}</td>
                                <td>{post.Likes}</td>
                                <td>
                                    {
                                        post.Likes == 0 ? <a type="button" onClick={() => { likePost(post.sno) }} className="btn btn-dark btn-sm mx-1">Like</a> : <a type="button" onClick={() => { likePost(post.sno) }} className="btn btn-dark btn-sm mx-1">Dislike</a>
                                    }

                                    {/* <a type="button" onClick={()=>{dislikePost(post.sno)}} className="btn btn-dark btn-sm mx-1">Dislike</a> */}
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Posts