import React, { useReducer, useEffect } from 'react';
import Axios from 'axios';

const initalStatePosts = {
    posts: [],
    error: '',
    loading: true
}

const POSTS_SENDING_RESQEST = "POSTS_SENDING_RESQEST";
const POSTS_SUCCESS_RESQEST = "POSTS_SUCCESS_RESQEST";
const POSTS_FAILED_RESQEST = "POSTS_FAILED_RESQEST";

const reducer = (state, action) => {
    switch (action.type) {
        case POSTS_SENDING_RESQEST:
            return {
                ...state,
                loading: true
            }
        case POSTS_SUCCESS_RESQEST:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }
        case POSTS_FAILED_RESQEST:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state;
    }
}

const HomeDataFetchCompo = () => {

    const [state, dispatch] = useReducer(reducer, initalStatePosts);

    useEffect(() => {
        dispatch({ type: POSTS_SENDING_RESQEST });
        Axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            const { data } = res;
            dispatch({ type: POSTS_SUCCESS_RESQEST, payload: data })
        }).catch(error => dispatch({ type: POSTS_FAILED_RESQEST, payload: error.message }))

    }, []);


    return (
        <>
            {state.loading ? <span>loading.....</span> :
                <ul>
                    {state.posts.map(post => (
                        <li key={post.id}>{post.email}</li>
                    ))}
                </ul>
            }
        </>
    );
}

export default HomeDataFetchCompo;


