import React, { Component } from "react";
import NavBar from "./components/navbar";
import {Redirect, Route,Switch} from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

//Register our routes, means we need to tell react what component should be rendered based on a given url.
//when using <switch></switch>  

//Route component is a wrapper around the component that we pass and if the path matches,
// it will render the component and it will automatically injects these props(history, match, location,) into the component.

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className = "content">
          <Switch>
            {/* <Route path="/products" component={Products}/> */}
            {/* <Route path="/products" render={() => <Products sort="newest" />} /> passing our own props to the component,here our componet overrides the components provided by Route component  */}
            
            <Route path='/products/:id' component={ProductDetails} />
            <Route path="/products" render={(props) => <Products sort="newest" {...props} />} /> {/*here we are passing the Route props as well as our own props to our component*/}
            <Route path="/posts/:year?/:month?" component={Posts}/> //? says the parameters are optional, this is a part of regular expression of Js
            <Route path="/admin" component={Dashboard}/>
            <Redirect from='/messages' to='/posts' />
            <Route path="/not-found" component={NotFound}/>
            <Route path="/" exact component={Home}/>
            <Redirect to='/not-found'/>

          </Switch>
  
        </div>
      </div>
    );
  }
}

export default App;
