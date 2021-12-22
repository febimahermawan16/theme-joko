import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionThree() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Full Body</CardTitle>
                            <CardSubtitle>Insert <code>.alert fade show</code> beside <code>.alert</code> class</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="alert alert-primary" role="alert">
                                <div className="alert-heading">Alert Primary</div>
                                <div className="alert-body">A simple primary alert—check it out!</div>
                            </div>
                            <div className="alert alert-secondary" role="alert">
                                <div className="alert-heading">Alert Secondary</div>
                                <div className="alert-body">A simple secondary alert—check it out!</div>
                            </div>
                            <div className="alert alert-success" role="alert">
                                <div className="alert-heading">Alert Success</div>
                                <div className="alert-body">A simple success alert—check it out!</div>
                            </div>
                            <div className="alert alert-danger" role="alert">
                                <div className="alert-heading">Alert Danger</div>
                                <div className="alert-body">A simple danger alert—check it out!</div>
                            </div>
                            <div className="alert alert-warning" role="alert">
                                <div className="alert-heading">Alert Warning</div>
                                <div className="alert-body">A simple warning alert—check it out!</div>
                            </div>
                            <div className="alert alert-info" role="alert">
                                <div className="alert-heading">Alert Info</div>
                                <div className="alert-body">A simple info alert—check it out!</div>
                            </div>
                            <div className="alert alert-dark" role="alert">
                                <div className="alert-heading">Alert Dark</div>
                                <div className="alert-body">A simple dark alert—check it out!</div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionThree
