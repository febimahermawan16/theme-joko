import React from 'react'
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Button Colors</CardTitle>
                            <CardSubtitle>
                                Insert <code>.btn .btn-[primary, secondary, success, danger, warning, info, light, dark]</code> class on your syntax to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="btn-area">
                                <Button color="primary" className="mgr-10 mgb-10">Primary</Button>
                                <Button color="secondary" className="mgr-10 mgb-10">Secondary</Button>
                                <Button color="success" className="mgr-10 mgb-10">Success</Button>
                                <Button color="danger" className="mgr-10 mgb-10">Danger</Button>
                                <Button color="warning" className="mgr-10 mgb-10">Warning</Button>
                                <Button color="info" className="mgr-10 mgb-10">Info</Button>
                                <Button color="light" className="mgr-10 mgb-10">Light</Button>
                                <Button color="dark" className="mgr-10 mgb-10">Dark</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Button Outline</CardTitle>
                            <CardSubtitle>
                                Insert <code>.btn-outline-[primary, secondary, success, danger, warning, info, light, dark]</code> beside <code>.btn</code> class on your syntax to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="btn-area">
                                <Button className="btn-outline-primary mgr-10 mgb-10">Primary</Button>
                                <Button className="btn-outline-secondary mgr-10 mgb-10">Secondary</Button>
                                <Button className="btn-outline-success mgr-10 mgb-10">Success</Button>
                                <Button className="btn-outline-danger mgr-10 mgb-10">Danger</Button>
                                <Button className="btn-outline-warning mgr-10 mgb-10">Warning</Button>
                                <Button className="btn-outline-info mgr-10 mgb-10">Info</Button>
                                <Button className="btn-outline-light mgr-10 mgb-10">Light</Button>
                                <Button className="btn-outline-dark mgr-10 mgb-10">Dark</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionOne
