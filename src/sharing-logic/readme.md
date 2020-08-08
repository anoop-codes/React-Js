## HOC (higher order component)

to share common functionality b/w components.

HOC : is a pattern where a function take a component as a argument and return a new Component;
        
       const newComponent =  HigherOrderFunction(oldComponent)

when we send down props to a wrappedComponent , it is not available in the component.. we need to send it again {...props}

As HOC are function , we can pass parameter to the function

## render props

the term 'render props' refers to a technique for sharing code between react components using a prop whose value is a function.

there is a variation in render props
       we can pass the function as children

            <>
                {this.props.childern(this.state.count, this.handleClick)}
            </>

            //
               <RenderPropsCounter >
                     {(count, onIncrement) => <ClickCounter onIncrement={onIncrement} state={count} />}
               </RenderPropsCounter>

              //pass as a childern

## custom Hooks

a custom is bascilly a js function whose name start with "use";
a custom can also call other hooks if required

why? : to share logic b/w components

       alternative to HOC and render props , 
