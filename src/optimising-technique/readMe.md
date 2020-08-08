## Pure Component
A regular component does not implement the ShouldComponentUpdate mehtod , it alwasy return true by default,A pure component on the other hand implement ShouldComponentUpdate with shallow props and state comparsion.

        SC of preState with currentState or SC of preProps with currentProps  ? => the component will re-render

shallow comparsion:
    primitive type : 
        a (SC) b retun true if a and b have the same value and are of the same type.
    
    refernce type
        a (SC) b return true if a and b refence the exect same object. 

** always return new obj or array when dealing with pure component

## memo
    it work same as pure Component

## useCallback
useCallback is a hook that will return a memoized version of the callback function that only changes , if one of the dependencies has changed.

the useCallBack hook will cache , the function value, and return the same value if the function dependency is not changed, if the depency have change , then only the a new func is returned.

## useMemo

- if u need to cache a func use callback ,if u need to cache the result of an involed func use Memo