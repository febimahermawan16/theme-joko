import React, { Component } from 'react'

// Components
import Header from './Components/Header'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SectionOne />
                <SectionTwo />
            </React.Fragment>
        )
    }
}

export default index