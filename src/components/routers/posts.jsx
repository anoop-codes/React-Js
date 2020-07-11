import React from "react";
import { parse } from 'query-string';

const Posts = (props) => {
  const queryValue = parse(props.location.search);

  return (
    <div>
      <h1>Posts</h1>
      queryValue : {queryValue.name}
      <br />
      Year: , Month:
    </div>
  );
};

export default Posts;
