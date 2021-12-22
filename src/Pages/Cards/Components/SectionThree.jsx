import React from 'react'
import { Row, Col, Card, CardBody, CardHeader, CardTitle, CardText } from 'reactstrap'

function SectionThree() {
    return (
        <React.Fragment>
            <Row>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card color="transparent">
                        <CardHeader className="no-border">
                            <CardTitle>Card Transparent</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card color="primary">
                        <CardHeader className="no-border">
                            <CardTitle className="text-white">Card Primary</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText className="text-white">
                                Some quick example text to build on the card title and make up.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card color="secondary">
                        <CardHeader className="no-border">
                            <CardTitle className="text-white">Card Secondary</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText className="text-white">
                                Some quick example text to build on the card title and make up.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card color="success">
                        <CardHeader className="no-border">
                            <CardTitle className="text-white">Card Success</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText className="text-white">
                                Some quick example text to build on the card title and make up.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card color="danger">
                        <CardHeader className="no-border">
                            <CardTitle className="text-white">Card Danger</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText className="text-white">
                                Some quick example text to build on the card title and make up.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card color="warning">
                        <CardHeader className="no-border">
                            <CardTitle className="text-white">Card Warning</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText className="text-white">
                                Some quick example text to build on the card title and make up.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card color="info">
                        <CardHeader className="no-border">
                            <CardTitle className="text-white">Card Info</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText className="text-white">
                                Some quick example text to build on the card title and make up.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card color="light">
                        <CardHeader className="no-border">
                            <CardTitle>Card Light</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card color="dark">
                        <CardHeader className="no-border">
                            <CardTitle className="text-white">Card Dark</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText className="text-white">
                                Some quick example text to build on the card title and make up.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionThree
