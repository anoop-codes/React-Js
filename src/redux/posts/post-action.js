import { POST_FETCH_REQUEST, POST_SUCCESS_REQUEST, POST_FAILED_REQUEST } from "./post-action-types"
import axios from 'axios';


export function sendPostRequest() {
    return {
        type: POST_FETCH_REQUEST
    }
}

export function getPostRequest(posts) {
    return {
        type: POST_SUCCESS_REQUEST,
        payload: posts
    }
}

export function getFailedRequest(errorMsg) {
    return {
        type: POST_FAILED_REQUEST,
        payload: errorMsg
    }
}


//getFetch

export function fetchPostData() {

    return function (dispatch) {
        dispatch(sendPostRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            const posts = response['data'].map(posts => posts.title).slice(0, 10);
            dispatch(getPostRequest(posts))
        }).catch(error => {
            dispatch(getFailedRequest(error.message))
        })
    }
}