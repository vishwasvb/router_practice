import React from "react";
import {Link} from "react-router-dom"

//Content for these components are inside bundle.js file.
//All our components are part of our bundle, they are downloaded ahead of time when the application loads.
//There is no need to redownload this bundle every time whenever user navigates from ine component to another 

//Link prevents additional http request to the server

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
