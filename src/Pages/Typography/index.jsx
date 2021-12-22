import React, { Component } from 'react'
import Header from './Components/Header'

// Components
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree'

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </React.Fragment>
        )
    }
}

export default index
