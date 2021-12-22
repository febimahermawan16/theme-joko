import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionTwo() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Dismissable</CardTitle>
                            <CardSubtitle>Insert <code>.alert-dismissible fade show</code> beside <code>.alert</code> class</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                                A simple primary alert—check it out!
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                                A simple secondary alert—check it out!
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                A simple success alert—check it out!
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                A simple danger alert—check it out!
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                A simple warning alert—check it out!
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <div className="alert alert-info alert-dismissible fade show" role="alert">
                                A simple info alert—check it out!
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <div className="alert alert-light alert-dismissible fade show" role="alert">
                                A simple light alert—check it out!
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <div className="alert alert-dark alert-dismissible fade show" role="alert">
                                A simple dark alert—check it out!
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionTwo
