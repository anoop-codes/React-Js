import React, { Component } from 'react';
import Navbar from './navbar'
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './products';
import Posts from './posts';
import Dashboard from './admin/dashboard';
import Home from './home';
import ProductDetails from './productDetails';
import NotFound from './notFound';

class HomeRoutingCompo extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route path="/products/:id" component={ProductDetails} />
                        {/* to set addational props when using a rout, pass data */}
                        {/* <Route path="/products" render={(props) => <Products {...props} sortBy="anoop kumar" />} /> */}
                        <Route path="/products" component={Products} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/admin" component={Dashboard} />

                        {/* if we want to re-direct the person form on route to another then*/}
                        {/* <Redirect from='/someRoute' to='to a perticuler route'/> */}
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
 * routing algorithm check if the path start with / and render the componet , so home('/') and other with ('/xyz') both are rendered.
 * to avoid this we use Switch or exact
 * 
 * most specific one to most generic one.
 */

export default HomeRoutingCompo;