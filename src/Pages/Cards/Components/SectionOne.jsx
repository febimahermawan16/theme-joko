import React from 'react'
import { Row, Col, Button, Card, CardBody, CardFooter, CardHeader, CardTitle, CardText } from 'reactstrap'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Basic</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Praesentium natus pariatur sed voluptates alias distinctio ratione quisquam laboriosam odio, 
                                modi, quo ea molestias accusamus accusantium quam debitis exercitationem expedita perferendis!
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">Go Somewhere</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card>
                        <CardBody>
                            <h4>Card Basic</h4>
                            <CardText className="mgt-35">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Praesentium natus pariatur sed voluptates alias distinctio ratione quisquam laboriosam odio, 
                                modi, quo ea molestias accusamus accusantium quam debitis exercitationem expedita perferendis!
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <CardTitle>No Header</CardTitle>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Basic</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText className="mgb-15">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Praesentium natus pariatur sed voluptates alias distinctio ratione quisquam laboriosam odio, 
                                modi, quo ea molestias accusamus accusantium quam debitis exercitationem expedita perferendis!
                            </CardText>
                            <h4>No Footer</h4>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionOne
