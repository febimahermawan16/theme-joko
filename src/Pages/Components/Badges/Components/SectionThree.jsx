import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionThree() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Rounded Badge</CardTitle>
                            <CardSubtitle>
                                Insert <code>.badge .rounded-pill</code> class on your tag to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <span className="badge rounded-pill bg-primary mgr-10 mgb-10">Primary</span>
                            <span className="badge rounded-pill bg-secondary mgr-10 mgb-10">Secondary</span>
                            <span className="badge rounded-pill bg-success mgr-10 mgb-10">Success</span>
                            <span className="badge rounded-pill bg-danger mgr-10 mgb-10">Danger</span>
                            <span className="badge rounded-pill bg-warning mgr-10 mgb-10">Warning</span>
                            <span className="badge rounded-pill bg-info mgr-10 mgb-10">Info</span>
                            <span className="badge rounded-pill bg-light mgr-10 mgb-10">Light</span>
                            <span className="badge rounded-pill bg-dark mgr-10 mgb-10">Dark</span>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Badge Size</CardTitle>
                            <CardSubtitle>
                                Insert <code>.badge .[sm, lg, xlg]</code> class on your tag to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <span className="badge sm bg-primary mgr-10 mgb-10">Primary</span>
                            <span className="badge bg-primary mgr-10 mgb-10">Primary</span>
                            <span className="badge lg bg-primary mgr-10 mgb-10">Primary</span>
                            <span className="badge xlg bg-primary mgr-10 mgb-10">Primary</span>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionThree
