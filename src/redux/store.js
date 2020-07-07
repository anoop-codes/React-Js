import { combineReducers, createStore, applyMiddleware } from 'redux'
import { cakeReducer } from './cake/cake-reducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import { postsReducer } from './posts/post-reducer';
import thunk from 'redux-thunk';


//rootreducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    posts: postsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));;

export default store;