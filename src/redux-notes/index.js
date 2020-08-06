const redux = require('redux');
const logger = require('redux-logger');

//state
const initalStateCake = {
    numberOfCake: 10
}
const initalStateIceCream = {
    numberOfIceCream: 30
}

//Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//action creator
function buyCake(count = 1) {
    return {
        type: BUY_CAKE,
        payLoad: count,
        //... can also any number of property , even a nested obj
    }
}

function buyIceCream(count = 1) {
    return {
        type: BUY_ICECREAM,
        payLoad: count,
        //... can also any number of property , even a nested obj
    }
}

//reducer
const cakeReducer = (state = initalStateCake, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake - action.payLoad
            }
        default:
            return state;
    }
}

const iceCreamReducer = (state = initalStateIceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - action.payLoad
            }
        default:
            return state;
    }
}

//combineReducer , to combine the reducer
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//creating the store
const store = redux.createStore(rootReducer,
    redux.applyMiddleware(logger.createLogger())
);

/**
 * store : hold the state of the application
  {
    dispatch: [Function: dispatch],--allowa state to be updated
    subscribe: [Function: subscribe], -->register listiners
    getState: [Function: getState], ---> allow access to the state
  }
 */
console.log('initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated State', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyIceCream(3))
store.dispatch(buyCake(2));
store.dispatch(buyCake(4));

unsubscribe();