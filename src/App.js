import React from 'react';
import './App.css';
// import HomeVidlyApp from './app-vidly/HomeVidlyApp';
import HomeHooksCompo from './aap-hooks/HomeHooks';


function App() {
  return (
    <div className="container">
      <HomeHooksCompo />
    </div>
  );
}

export default App;

/**
 * react is a component based archit.
 *
 * render method : for the render the UI of the component : o/p ----> is a react element, a simple js object that map's to a DOM element(in memory) , the resprenstional DOM is called the virtual dom. when we change the state of the component,we get a new react element , react will then  compare the prevstate and the currernt state , and change the DOM element of the browser.
 *
 * in react we don't work with the DOM api directly.
 *
 * when we want to modify the webpack config, we use the reject command
 */