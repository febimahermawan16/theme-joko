import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Colors</CardTitle>
                            <CardSubtitle>Insert <code>.alert-*</code> beside <code>.alert</code> class. Or set on <code>color=*</code> if using reactstrap.</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="alert alert-primary" role="alert">
                                A simple primary alert—check it out!
                            </div>
                            <div className="alert alert-secondary" role="alert">
                                A simple secondary alert—check it out!
                            </div>
                            <div className="alert alert-success" role="alert">
                                A simple success alert—check it out!
                            </div>
                            <div className="alert alert-danger" role="alert">
                                A simple danger alert—check it out!
                            </div>
                            <div className="alert alert-warning" role="alert">
                                A simple warning alert—check it out!
                            </div>
                            <div className="alert alert-info" role="alert">
                                A simple info alert—check it out!
                            </div>
                            <div className="alert alert-light" role="alert">
                                A simple light alert—check it out!
                            </div>
                            <div className="alert alert-dark" role="alert">
                                A simple dark alert—check it out!
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionOne
