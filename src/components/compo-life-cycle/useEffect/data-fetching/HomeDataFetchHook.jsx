import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const HomeDataFetchHook = () => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(1);
    const [post, setPost] = useState({});

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            const { data: posts } = res;
            setPosts([...posts])
        })
    }, []);

    const handleGetPost = () => {
        if (postId !== '') {
            Axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => {
                const { data: post } = res;
                setPost({ ...post });
                console.log(post)
            })
        }
    }


    return (
        <>
            <div style={{ padding: '10px', margin: '10px' }}>
                <input type="number" onChange={(e) => setPostId(e.target.value)} value={postId} />
                <button onClick={handleGetPost}>getPost</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <button>update</button>
                            </td>
                            <td>
                                <button>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default HomeDataFetchHook;