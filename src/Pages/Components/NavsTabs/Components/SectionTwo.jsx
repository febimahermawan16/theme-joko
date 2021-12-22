import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionTwo() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Horizontal Alignment</CardTitle>
                            <CardSubtitle>
                                Change the horizontal alignment of your nav with <Link to={{ pathname: 'https://getbootstrap.com/docs/5.0/layout/grid/#horizontal-alignment' }} target='_blank'>flexbox utilities</Link>. 
                                By default, navs are left-aligned, but you can easily change them to center or right aligned. 
                                Centered with <code>.justify-content-center</code>:
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link active" aria-current="page">Active</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link">Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link">Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link disabled" aria-disabled="true" tabIndex="-1">Disabled</Link>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Vertical Alignment</CardTitle>
                            <CardSubtitle>
                                Change the horizontal alignment of your nav with <Link to={{ pathname: 'https://getbootstrap.com/docs/5.0/layout/grid/#horizontal-alignment' }} target='_blank'>flexbox utilities</Link>. 
                                By default, navs are left-aligned, but you can easily change them to center or right aligned. 
                                Right-aligned with <code>.justify-content-end</code>:
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link active" aria-current="page">Active</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link">Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link">Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link disabled" aria-disabled="true" tabIndex="-1">Disabled</Link>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionTwo
