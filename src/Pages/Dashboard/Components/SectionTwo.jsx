import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

import TableOne from './utilities/TableOne'

export class SectionTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="mgt-50">
                    <Col lg="12" md="12" sm="12" className="mgb-10">
                        <TableOne />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default SectionTwo
