import { FETCH_POSTS_REQUEST, SUCCESS_POSTS_REQUEST, ERROR_POSTS_REQUEST } from './post-actions-type';
import axios from 'axios';

//action generator
function sendRequest() {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

function getSuccessRequest(data) {
    return {
        type: SUCCESS_POSTS_REQUEST,
        payload: data
    }
}


function getErrorRequest(data) {
    return {
        type: ERROR_POSTS_REQUEST,
        payload: data
    }
}

//async action creator

/**
 * redux-thunk : allow to have side effects, it recieve dispatch as it's argument
 */
export function fetchPost() {
    return (dispatch) => {
        dispatch(sendRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            const data = res.data;
            dispatch(getSuccessRequest(data))
        }).catch(error => {
            dispatch(getErrorRequest(error.message));
        });
    }
}
