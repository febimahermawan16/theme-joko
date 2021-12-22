import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Colored Badge</CardTitle>
                            <CardSubtitle>
                                Insert <code>.badge .bg-[primary, secondary, success, danger, warning, info, light, dark]</code> class on your tag to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <span className="badge bg-primary mgr-10 mgb-10">Primary</span>
                            <span className="badge bg-secondary mgr-10 mgb-10">Secondary</span>
                            <span className="badge bg-success mgr-10 mgb-10">Success</span>
                            <span className="badge bg-danger mgr-10 mgb-10">Danger</span>
                            <span className="badge bg-warning mgr-10 mgb-10">Warning</span>
                            <span className="badge bg-info mgr-10 mgb-10">Info</span>
                            <span className="badge bg-light mgr-10 mgb-10">Light</span>
                            <span className="badge bg-dark mgr-10 mgb-10">Dark</span>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Glowed Badge</CardTitle>
                            <CardSubtitle>
                                Insert <code>.badge .glow-[primary, secondary, success, danger, warning, info, dark]</code> class on your tag to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <span className="badge bg-primary glow-primary mgr-10 mgb-10">Primary</span>
                            <span className="badge bg-secondary glow-secondary mgr-10 mgb-10">Secondary</span>
                            <span className="badge bg-success glow-success mgr-10 mgb-10">Success</span>
                            <span className="badge bg-danger glow-danger mgr-10 mgb-10">Danger</span>
                            <span className="badge bg-warning glow-warning mgr-10 mgb-10">Warning</span>
                            <span className="badge bg-info glow-info mgr-10 mgb-10">Info</span>
                            <span className="badge bg-dark glow-dark mgr-10 mgb-10">Dark</span>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionOne
