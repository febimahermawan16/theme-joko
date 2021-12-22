import React from 'react'
import { Col, Row } from 'reactstrap'

// Components
import FontColor from './utilities/FontColor'
import InjectedColor from './utilities/InjectedColor'
import TextElement from './utilities/TextElement'

function SectionThree() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="4" md="4" sm="12">
                    <FontColor />
                </Col>
                <Col lg="4" md="4" sm="12">
                    <InjectedColor />
                </Col>
                <Col lg="4" md="4" sm="12">
                    <TextElement />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionThree
