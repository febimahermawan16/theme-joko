import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

// Components
import FontWeight from './utilities/FontWeight'
import DisplayHeading from './utilities/DisplayHeading'

export class SectionTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="mgb-30">
                    <Col lg="6" md="6" sm="12">
                        <FontWeight />
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <DisplayHeading />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default SectionTwo
