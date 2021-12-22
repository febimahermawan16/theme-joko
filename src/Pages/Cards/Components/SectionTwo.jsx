import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Row } from 'reactstrap'
import Image from '../../../Assets/Images/Cards/01.jpg'

function SectionTwo() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Image</CardTitle>
                        </CardHeader>
                        <img src={Image} className="img-fluid" alt="..." />
                        <CardBody>
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quis, 
                                quibusdam deserunt adipisci vero tenetur alias?
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <Button size="sm" color="primary">Go Somewhere</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card>
                        <img src={Image} className="card-img-top" alt="..." />
                        <CardBody>
                            <CardTitle>Card Image</CardTitle>
                            <CardText className="mgt-10">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quis, 
                                quibusdam deserunt adipisci vero tenetur alias? 
                                Lorem ipsum dolor sit amet.
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <Button size="sm" color="primary">Go Somewhere</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="4" md="4" sm="12" className="mgb-30">
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Image</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <img src={Image} className="img-fluid" alt="..." />
                            <CardText className="mgt-20">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quis, 
                                quibusdam deserunt adipisci vero tenetur alias?
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <Button size="sm" color="primary">Go Somewhere</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionTwo
