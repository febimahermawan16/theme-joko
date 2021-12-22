import React, { Component } from 'react'

// Components
import Header from './Components/Header'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree'
import SectionFour from './Components/SectionFour'
import SectionFive from './Components/SectionFive'

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
            </React.Fragment>
        )
    }
}

export default index