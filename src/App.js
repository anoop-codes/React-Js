import React from 'react';
import './App.css';
import CakeConatiner from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './store/store';
import HooksCakesContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import PostContainer from './components/PostsConatiner';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <CakeConatiner sortBy="name" />
        <HooksCakesContainer />
        <HooksIceCreamContainer />
        <PostContainer />
      </div>
    </Provider>
  );
}

export default App;
