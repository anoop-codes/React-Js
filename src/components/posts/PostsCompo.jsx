import React, { useEffect } from 'react';
import { fetchPostData } from '../../redux/posts/post-action';
import { useSelector, useDispatch } from 'react-redux';

const PostsCompo = () => {

    const { posts } = useSelector(store => store.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostData())
    }, [dispatch])

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={`post-${Math.random(10)}`}>{post}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostsCompo;