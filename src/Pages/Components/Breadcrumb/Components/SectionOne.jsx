import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Default Breadcrumb</CardTitle>
                            <CardSubtitle>
                                We use breadcrumb from bootstrap 5 with restyle the stylesheet, you can visit the officially bootstrap/reactstrap website how to use it
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
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
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionOne
