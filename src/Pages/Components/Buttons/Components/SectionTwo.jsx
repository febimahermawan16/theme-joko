import React from 'react'
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionTwo() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Button Flat</CardTitle>
                            <CardSubtitle>
                                Insert <code>.btn .btn-flat-[primary, secondary, success, danger, warning, info, light, dark]</code> class on your tag to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="btn-area">
                                <Button className="btn-flat-primary mgr-10 mgb-10">Primary</Button>
                                <Button className="btn-flat-secondary mgr-10 mgb-10">Secondary</Button>
                                <Button className="btn-flat-success mgr-10 mgb-10">Success</Button>
                                <Button className="btn-flat-danger mgr-10 mgb-10">Danger</Button>
                                <Button className="btn-flat-warning mgr-10 mgb-10">Warning</Button>
                                <Button className="btn-flat-info mgr-10 mgb-10">Info</Button>
                                <Button className="btn-flat-light mgr-10 mgb-10">Light</Button>
                                <Button className="btn-flat-dark mgr-10 mgb-10">Dark</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Button Round</CardTitle>
                            <CardSubtitle>
                                Insert this class <code>.btn-round / .btn-rounded</code> beside <code>.btn</code> class on your tag to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="btn-area">
                                <Button className="btn-round btn-outline-primary mgr-10 mgb-10">Primary</Button>
                                <Button className="btn-round btn-outline-secondary mgr-10 mgb-10">Secondary</Button>
                                <Button className="btn-round btn-outline-success mgr-10 mgb-10">Success</Button>
                                <Button className="btn-round btn-outline-danger mgr-10 mgb-10">Danger</Button>
                                <Button className="btn-round btn-outline-warning mgr-10 mgb-10">Warning</Button>
                                <Button className="btn-round btn-outline-info mgr-10 mgb-10">Info</Button>
                                <Button className="btn-round btn-outline-light mgr-10 mgb-10">Light</Button>
                                <Button className="btn-round btn-outline-dark mgr-10 mgb-10">Dark</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionTwo
