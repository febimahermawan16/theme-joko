import React from 'react'
import { Col, Row } from 'reactstrap'

// Components
import Heading from './utilities/Heading'
import InjectedFont from './utilities/InjectedFont'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                  <Heading />  
                </Col>
                <Col lg="6" md="6" sm="12">
                    <InjectedFont />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionOne
