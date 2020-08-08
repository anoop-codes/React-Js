## life cycle

For class Components

4 phases of life cycle

1} Mounting
    - when instance of the component is created and inserted into the DOM.

2} updating
    -called when a component is being re-rendered as a result of changes to either to it's props or state

3} Unmounting
    -when the component is removed from the DOM.

4} Error Handling
    -when there is error in the rendering , in a life-cycle method or in the constru of there child.


## Mouting Phase
1}constructor
    -constructor method is called before the component is mounted to the DOM.
    -initialise state and bind event handlers methods within the constructor method.
    -the constructor is NOT where to introduce any side-effects or subscriptions such as event handlers

### Raraly used : 2} getDerivedStateFromProps()
    static getDerivedStateFromProps(props, state) { 
        //....
        return null || state
    }  

    - when the state of the component depend on the changes in props over time.
    - rarely used
    - don't have access to this 
    - NOT where to introduce any side-effects or subscriptions such as event handlers

3}Render 
    -pure function
    -only required life cycle hook
    -then this we have children , where the life cycle hooks of children are execu.

4}componentDidMount
    -called only once
    -can cause side effects


## updating lifecycle methods

#### 1}static getDerivedStateFromProps()
            -that this method is invoked in both the mounting and updating phases. 

#### 2}shouldComponentUpdate(nextProps, nextState)
    -return a boolean — true or false and control whether the component gets re-rendered or not i.e upon a change in state or props.
    -don’t want a component to re-render if the stateand props don’t change.
    -performance optimsation

3}render

### 4}getSnapshotBeforeUpdate()
    -Right after the render method is called, the getSnapshotBeforeUpdatelifcycle method is called next.
    -when you need to grab some information from the DOM (and potentially change it) just after an update is made.
        
         getSnapshotBeforeUpdate(prevProps, prevState) {
                 return value || null // where 'value' is a  valid JavaScript value  
        }

    ---Imp: help to capture some info from  DOM.


5}componentDidUpdate
    -called only once , have the preState and Props value
    -cause side effect
 
    componentDidUpdate(prevProps, prevState, snapshot:optinal) {
    }


## The unmounting lifecycle method

1} componentWillUnmount()

    -called only once
    -invoked immediately before a component is unmounted and destroyed. This is the ideal place to perform any necessary cleanup such as clearing up timers, cancelling network requests, or cleaning up any subscriptions that were created in componentDidMount()



## The error handling lifecycle methods

1}static getDerivedStateFromError(error)

2}componentDidCatch(error,info)



## Error Boundry

A class Component that implements either one or both the life cycle methods getDerivedStateFromError or componentDidCatch becomes an Error boundry.

the static getDerivedStateFromError method is used to render the a fallback UI after an Error is thrown and componentDidCatch method is used log the error information.

