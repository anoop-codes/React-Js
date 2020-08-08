import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const FetchingPosts = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            {loading ? <span>Loading data.........</span> :
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            }
        </>
    );
}

export default FetchingPosts;