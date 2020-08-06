const redux = require('redux');
const logger = require('redux-logger');
const thunk = require('redux-thunk').default;
const axios = require('axios').default;

//state
const intialState = {
    data: [],
    error: '',
    loading: true
}

//action-type
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const SUCCESS_USERS_REQUEST = 'SUCCESS_USERS_REQUEST';
const ERROR_USERS_REQUEST = 'ERROR_USERS_REQUEST';

//action generator
function sendRequest() {
    return {
        type: FETCH_USERS_REQUEST
    }
}

function getSuccessRequest(data) {
    return {
        type: SUCCESS_USERS_REQUEST,
        payload: data
    }
}


function getErrorRequest(data) {
    return {
        type: ERROR_USERS_REQUEST,
        payload: data
    }
}

//async action creator

/**
 * redux-thunk : allow to have side effects, it recieve dispatch as it's argument
 */
function fetchUser() {
    return (dispatch) => {
        dispatch(sendRequest());
        axios.get('https://jsonplaceholder.typicode.com/user').then(res => {
            data = res.data.map(d => d.email);
            dispatch(getSuccessRequest(data))
        }).catch(error => {
            dispatch(getErrorRequest(error.message));
        });
    }
}


//reucer
const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_USERS_REQUEST:
            return {
                ...state,
                data: action.payload,
                error: '',
                loading: false
            }
        case ERROR_USERS_REQUEST:
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

const store = redux.createStore(userReducer, redux.applyMiddleware(logger.createLogger(), thunk));

store.dispatch(fetchUser());

