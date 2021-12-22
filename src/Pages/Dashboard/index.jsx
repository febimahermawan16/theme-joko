import React, { Component } from 'react'
import Welcome from './Components/Welcome'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'

export class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <SectionOne />
                <Welcome />
                <SectionTwo />
            </React.Fragment>
        )
    }
}

export default Index
