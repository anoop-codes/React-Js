import React from "react";
import { parse } from 'query-string';

const Posts = ({ location }) => {
  const { name } = parse(location.search)
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        <li> name: {name}</li>
      </ul>
    </div>
  );
};

export default Posts;
