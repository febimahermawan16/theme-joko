import React, { Component } from 'react'
import { APP_NAME, APP_VERSION, APP_YEAR, APP_VENDOR } from '../Lib/Constant'

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="footer-content">
                        <span className="copyright">
                            {APP_YEAR}©{APP_NAME} ReactJS Theme. Development by {APP_VENDOR}.
                        </span>
                        <span className="version">v{APP_VERSION}</span>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer
