/**
 * redux is a "predictiable" "state containter" for "js app".
 *
 * depending on number of modules we can have store.
 *
 * core concepts:  redux has a
 *          store , which is simple js object which hold the state of the application .
 *          action : it state something has happen ,it is also a simple js {type:'' , payload?:''} .
 *          reducer : it is function ,which take the current state and action as a parameter  ,and depending on the action "type" , it return the new state
 *                      and interally store update itsef.
 *
 *          like a cakeShope : store is the cakeshope , buyer it the action and shopkeeper is the reducer.
 *
 *
 *  reducer is soly responsible for uptating the state of the store , specify how the state changes in reponse to the action.
 * 
 *          reducer(previousState , action) => returning new state
 * 
 *  middleWare : it is used to extend redux with custom function 
 */

const redux = require('redux');
const reduxlogger = require('redux-logger');
const logger = reduxlogger.createLogger();


//store -1
const initalStateCake = {
    numberOfCake: 10
}

//store -2
const initalStateIceCream = {
    numberOfIceCream: 10
}



//actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';


//action creator
function buyCake() {
    return {
        type: BUY_CAKE
    }
}

function buyIceCream() {
    return {
        type: BUY_ICE_CREAM
    }
}

//reducer cake
function cakeReducer(state = initalStateCake, action) {

    switch (action.type) {

        case BUY_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1
            }

        default:
            return state;
    }
}

//reducer ice cream
function iceCreamReducer(state = initalStateIceCream, action) {

    switch (action.type) {

        case BUY_ICE_CREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            }

        default:
            return state;
    }
}

//comination of reducer 
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


//Creating the store
const store = redux.createStore(rootReducer, redux.applyMiddleware(logger));
console.log('initial state', store.getState());
const unSubscribe = store.subscribe(() => { });

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());

unSubscribe();