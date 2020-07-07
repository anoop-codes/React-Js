import React from 'react';
import './App.css';
import HomeCakeCompo from './components/cake/HomeCakeCompo';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './components/cake/HookCakeContainer';
import PostsCompo from './components/posts/PostsCompo';


function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <HomeCakeCompo name='anoop kumar' />
        <HookCakeContainer />

        <h6>Post</h6>
        <PostsCompo />
      </div>
    </Provider>
  );
}



export default App;
