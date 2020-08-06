import { intialStatePost } from './posts-initalState';
import { FETCH_POSTS_REQUEST, SUCCESS_POSTS_REQUEST, ERROR_POSTS_REQUEST } from './post-actions-type';
//reucer
export const postsReducer = (state = intialStatePost, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_POSTS_REQUEST:
            return {
                ...state,
                data: action.payload,
                error: '',
                loading: false
            }
        case ERROR_POSTS_REQUEST:
            return {
                ...state,
                data: [],
                error: action.payload,
                loading: false
            }

        default:
            return state;
    }
}