const redux = require('redux');
const axios = require('axios').default;
const thunk = require('redux-thunk').default;

//logger
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


//store 
const initalStatePosts = {
    posts: [],
    postsError: '',
    loading: true
}

//action type :
const FETCH_REQUEST = "FETCH_REQUEST";
const SUCCESS_REQUEST = "SUCCESS_REQUEST";
const FAILED_REQUEST = "FAILED_REQUEST";

//action creator
function sendRequest() {
    return {
        type: FETCH_REQUEST
    }
}

function getSuccessRequest(data) {
    return {
        type: SUCCESS_REQUEST,
        payload: data
    }
}

function getFailedRequest(errorMsg) {
    return {
        type: FAILED_REQUEST,
        payload: errorMsg
    }
}


//redux - thunk : define async action creator
function fetchPost() {

    return function (dispatch) {
        dispatch(sendRequest())
        axios.get('https://jsonplaceholder.typicode.com/post').then((response) => {
            const posts = response['data'].map(posts => posts.title).slice(0, 10);
            dispatch(getSuccessRequest(posts))
        }).catch(error => {
            dispatch(getFailedRequest(error.message))
        })
    }
}


const rootReducer = (state = initalStatePosts, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_REQUEST:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                postsError: ''
            }
        case FAILED_REQUEST:
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


const store = redux.createStore(rootReducer, redux.applyMiddleware(logger, thunk));

console.log('initial state', store.getState());
const unSubscribe = store.subscribe(() => { });
store.dispatch(fetchPost());

unSubscribe();