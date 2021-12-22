import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionTwo() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Outlined Badge</CardTitle>
                            <CardSubtitle>
                                Insert <code>.badge .outline-[primary, secondary, success, danger, warning, info, light, dark]</code> class on your tag to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <span className="badge outline-primary mgr-10 mgb-10">Primary</span>
                            <span className="badge outline-secondary mgr-10 mgb-10">Secondary</span>
                            <span className="badge outline-success mgr-10 mgb-10">Success</span>
                            <span className="badge outline-danger mgr-10 mgb-10">Danger</span>
                            <span className="badge outline-warning mgr-10 mgb-10">Warning</span>
                            <span className="badge outline-info mgr-10 mgb-10">Info</span>
                            <span className="badge outline-light mgr-10 mgb-10">Light</span>
                            <span className="badge outline-dark mgr-10 mgb-10">Dark</span>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Light Badge</CardTitle>
                            <CardSubtitle>
                                Insert <code>.badge .light-[primary, secondary, success, danger, warning, info, light, dark]</code> on your tag to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <span className="badge light-primary mgr-10 mgb-10">Primary</span>
                            <span className="badge light-secondary mgr-10 mgb-10">Secondary</span>
                            <span className="badge light-success mgr-10 mgb-10">Success</span>
                            <span className="badge light-danger mgr-10 mgb-10">Danger</span>
                            <span className="badge light-warning mgr-10 mgb-10">Warning</span>
                            <span className="badge light-info mgr-10 mgb-10">Info</span>
                            <span className="badge light-light mgr-10 mgb-10">Light</span>
                            <span className="badge light-dark mgr-10 mgb-10">Dark</span>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionTwo
