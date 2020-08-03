import React from "react";
import { Route, Link } from "react-router-dom";
import Posts from "./posts";
import Users from "./users";


const Dashboard = () => {
  return (
    <>
      <div>
        <h1>Admin Dashboard</h1>
        <ul>
          <li>
            <Link to="/admin/users">users</Link>
          </li>
          <li>
            <Link to="/admin/posts">posts</Link>
          </li>
        </ul>
      </div>
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} />
    </>
  );
};

export default Dashboard;
