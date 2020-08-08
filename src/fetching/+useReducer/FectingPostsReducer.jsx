import React from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const intitialState = {
    posts: [],
    error: '',
    loading: true
}

const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case 'FETCHING_POST':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_POST':
            return {
                ...state,
                posts: action.payload,
                error: '',
                loading: false
            }
        case 'FAILURE_POST':
            return {
                ...state,
                error: action.payload,
                posts: [],
                loading: false
            }

        default:
            return state;
    }
}


const FectingPostsReducer = () => {

    const [state, dispatch] = useReducer(reducer, intitialState);

    useEffect(() => {
        async function fetchData() {
            dispatch({ type: "FETCHING_POST" })
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
                dispatch({ type: "SUCCESS_POST", payload: data })
            } catch (error) {
                dispatch({ type: "FAILURE_POST", payload: error.message })
            }
        }
        fetchData();
    }, []);


    const { posts, error, loading } = state;

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

export default FectingPostsReducer;