import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionThree() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Vertical Alignment</CardTitle>
                            <CardSubtitle>
                                Stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., <code>.flex-sm-column</code>).
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="nav flex-column">
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
                            <CardTitle>Use Devider</CardTitle>
                            <CardSubtitle>
                                Add new <code>li/a</code> HTML tag with <code>.nav-devider</code> class inside, to use nav devider.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link active" aria-current="page">Active</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link">Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link">Link</Link>
                                </li>
                                <li className="nav-devider"></li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link disabled" aria-disabled="true" tabIndex="-1">Disabled</Link>
                                </li>
                            </ul>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link active" aria-current="page">Active</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link">Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/components-navs-tabs" className="nav-link">Link</Link>
                                </li>
                                <li className="nav-devider"></li>
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

export default SectionThree
