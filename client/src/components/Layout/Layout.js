import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import View from '../View/View';
import Join from '../Join/Join';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/join'} exact component={Join}/>
                    <Route path={'/view/:pizza'} exact component={View}/>
                </Switch>
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout;