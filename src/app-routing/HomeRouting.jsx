import React, { Component } from 'react';
import Home from './components/home';
import NavBar from './components/navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './components/products';
import Posts from './components/posts';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';

class HomeRouterCompo extends Component {
    state = {}
    render() {
        return (
            <>
                <NavBar />
                <div className="content-area">
                    <Switch>
                        <Route path="/products/:id" component={ProductDetails} />
                        {/* <Route path="/products" component={Products} /> */}
                        {/* if we want to pass additional pross , we use render props  */}
                        <Route path="/products" render={(props) => <Products sortby='name' {...props} />}></Route>
                        <Route path="/posts/:year?/:month?" component={Posts} />
                        <Route path="/admin" component={Dashboard} />

                        {/* sometime the person type some related ur so we can redirect to that url */}
                        <Redirect from="/home" to="/" />
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/" exact component={Home} />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </>
        );
    }
}

/**
 * react has router mechanism that, if the match path matches the url , it render the compoents,
 * 
 * "switch will render the first child that matches the path", order ur route from most specfic to most generic one
 */

export default HomeRouterCompo;