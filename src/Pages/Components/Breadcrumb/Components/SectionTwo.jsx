import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionTwo() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Alignment Breadcrumb</CardTitle>
                            <CardSubtitle>
                                Insert some syntax with this class <code>.breadcrumb-[left, center, end]</code> before <code>.breadcrumb</code> class
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="breadcrumb-left mgb-30">
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to="/">Main</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to="/components">Components</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem active>
                                        Breadcrumb
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                            <div className="breadcrumb-center mgb-30">
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to="/">Main</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to="/components">Components</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem active>
                                        Breadcrumb
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                            <div className="breadcrumb-right mgb-30">
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to="/">Main</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to="/components">Components</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem active>
                                        Breadcrumb
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionTwo
