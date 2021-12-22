import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

// Utilities
import Greeting from './utilities/Greeting'
import Statistic from './utilities/Statistic'

export class SectionOne extends Component {

    render() {
        return (
            <React.Fragment>
                <Row className="">
                    <Col lg="7" md="7" sm="12" className="mgb-10">
                        <Statistic />
                    </Col>
                    <Col lg="5" md="5" sm="12">
                        <Greeting />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default SectionOne
