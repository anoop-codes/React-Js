import { initialStatePosts } from "./post-initial-state";
import { POST_FETCH_REQUEST, POST_SUCCESS_REQUEST, POST_FAILED_REQUEST } from "./post-action-types";



export const postsReducer = (state = initialStatePosts, action) => {
    switch (action.type) {
        case POST_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_SUCCESS_REQUEST:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                postsError: ''
            }
        case POST_FAILED_REQUEST:
            return {
                ...state,
                loading: false,
                postsError: action.payload,
                posts: []
            }

        default:
            return state;
    }
}
