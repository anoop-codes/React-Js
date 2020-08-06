import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cakeReducer } from './cakes/cake-reducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { iceCreamReducer } from './ice-cream/iceCream-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postsReducer } from './posts/post-reducer';

const rootreducer = combineReducers({
    cakes: cakeReducer,
    iceCream: iceCreamReducer,
    postData: postsReducer
})

const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(createLogger(), thunk)));

export default store;