import React, { Component } from 'react'

// Components
import Header from './Components/Header'
import SectionOne from './Components/SectionOne'

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SectionOne />
            </React.Fragment>
        )
    }
}

export default index