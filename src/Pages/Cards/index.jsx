import React, { Component } from 'react'
import Header from './Components/Header'

// Components
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree'
import SectionFour from './Components/SectionFour'

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
            </React.Fragment>
        )
    }
}

export default index
