import React from 'react';
import Movies from './components/Movies';
import NavBar from './common/NavBar';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import PageNotFound from './components/PageNotFound';
import MoviesDetaislPage from './components/MoviesDetaislPage';

const HomeVidlyApp = () => {

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Switch>
                    <Route path="/movie/:id" component={MoviesDetaislPage} />
                    <Route path="/home" component={Movies} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/rentals" component={Rentals} />
                    <Route path="/not-found" component={PageNotFound} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="/not-found" />

                </Switch>
            </main>
        </>
    )

}

export default HomeVidlyApp;