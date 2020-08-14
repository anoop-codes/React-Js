import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from '../store/posts/post-actions';

const PostContainer = ({ sortBy }) => {

    const { postData } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost());
    }, []);

    return (
        <>
            <p>Data should be sorted by : <strong>{sortBy}</strong></p>
            {JSON.stringify(postData['data'][0])}
        </>
    );
}

export default PostContainer;