import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Default
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'

// Pages
import Dashboard from '../Pages/Dashboard'

import Typography from '../Pages/Typography'
import Cards from '../Pages/Cards'
import Accordion from '../Pages/Components/Accordion'
import Alerts from '../Pages/Components/Alerts'
import Avatar from '../Pages/Components/Avatar'
import Badges from '../Pages/Components/Badges'
import Breadcrumb from '../Pages/Components/Breadcrumb'
import Buttons from '../Pages/Components/Buttons'
import Carousel from '../Pages/Components/Carousel'
import Collapse from '../Pages/Components/Collapse'
import Dropdowns from '../Pages/Components/Dropdowns'
import ListGroup from '../Pages/Components/ListGroup'
import Modals from '../Pages/Components/Modals'
import NavsTabs from '../Pages/Components/NavsTabs'

export class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* Dashboard */}
                    <Route exact path="/">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Dashboard />
                            </div>
                            <Footer />
                        </div>
                    </Route>

                    {/* User Interface */}
                    <Route path="/typography">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Typography />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/cards">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Cards />
                            </div>
                            <Footer />
                        </div>
                    </Route>

                    {/* Components */}
                    <Route path="/components">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Accordion />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-accordion">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Accordion />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-alerts">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Alerts />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-avatar">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Avatar />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-badges">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Badges />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-breadcrumb">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Breadcrumb />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-buttons">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Buttons />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-carousel">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Carousel />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-collapse">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Collapse />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-dropdowns">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Dropdowns />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-listgroup">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <ListGroup />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-modals">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <Modals />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/components-navs-tabs">
                        <Header />
                        <div className="content">
                            <div className="content-app">
                                <NavsTabs />
                            </div>
                            <Footer />
                        </div>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Routers