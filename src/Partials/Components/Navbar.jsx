import React, { Component } from 'react'
import UserProfile from './header/UserProfile';
import Notifications from './header/Notifications';
import YearSelect from './header/YearSelect';

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navigation-bar">
                    <div className="pull-right df-fdr df-algn-ct">
                        <YearSelect />
                        <Notifications />
                        <UserProfile />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
