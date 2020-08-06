## Defination Redux
Redux : redux is a "predictable" "state container" for "javaScript" app.
        state Container : it's a simple js object that hold the state of the application.redux store and manage the application state.

## react-redux (package)
react redux is the offical redux UI binding library for the react.
 
## 3 core concepts
    Example:

        Cake Shop 
            (store)  shop: cake stored on the shelf 
            (reducer) shopkeeper: give or take the order
            (action)   customer: request for the cake

store : that hoid the state of the application;
action: discribe the changes in the state of the application;
reducer: which actually carries out the state tranisation depending on the Action.

## Principles
1 - the state of the whole application is stored in a object tree within the single store.
        store = {}
2 - the only way to change the state is to emit(dispact) an action, an object describing what happaned. not allowed to directly update the store.
        action = {
            type:'action name'
        }
3 - to specify how the state tree is transformed by action , you write the pure reducers

    reducer(previousState, action) => return a new state


* a app, which is sync with the store, when we want to change the state of the store, we dispact the action, which goes to the reducer, depending on the action ,reducer 
return a new state and interally update the state. which is insync with the app.

## Middleware
is the suggest way to extend the redux with extra functionality.
Provide a third party extenstion point b/w dispatching an action , and the moment it reches the reducer.
use middlware for logging , async task , crash reporting...