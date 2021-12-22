import React from 'react'
import { Edit3, Home, Navigation, Search } from 'react-feather'
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionThree() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Button Group And Button With Icon</CardTitle>
                            <CardSubtitle>
                                Insert your icon into button element to use button with icon, and insert <code>.btn-group</code> before button list to use button group 
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="btn-area mgb-15">
                                <ButtonGroup>
                                    <Button color='primary'>
                                        Left
                                    </Button>
                                    <Button color='primary'>
                                        Middle
                                    </Button>
                                    <Button color='primary'>
                                        Right
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <span className="btn-area">
                                <Button className="btn-outline-primary mgr-10 mgb-10">
                                    <Home /> <span className="mgl-5">Home</span>
                                </Button>
                                <Button color="warning" className="mgr-10 mgb-10">
                                    <Edit3 /> <span className="mgl-5">Edit</span>
                                </Button>
                                <Button className="btn-flat-success mgr-10 mgb-10">
                                    <Navigation /> <span className="mgl-5">Send</span>
                                </Button>
                                <Button className="btn-outline-info btn-rounded pdl mgr-10 mgb-10">
                                    <Search />
                                </Button>
                            </span>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Button Size</CardTitle>
                            <CardSubtitle>
                                Insert <code>.btn-[sm, lg, xlg]</code> beside <code>.btn</code> class on your syntax to initialize button size. 
                                we use different method for button position, so insert <code>.btn-area</code> before button list to use it.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="btn-area">
                                <Button color="primary" size="sm" className="mgr-10 mgb-10">Small</Button>
                                <Button color="primary" className="mgr-10 mgb-10">Normal</Button>
                                <Button color="primary" size="lg" className="mgr-10 mgb-10">Large</Button>
                                <Button color="primary" size="xlg" className="mgr-10 mgb-10">Extra Large</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionThree
