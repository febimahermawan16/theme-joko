import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <h3 className='mgb-30'>Navigation components</h3>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Base Nav</CardTitle>
                            <CardSubtitle>
                                <p>
                                    Navigation available in Bootstrap share general markup and styles, from the base <code>.nav</code> class to the active and disabled states. 
                                    Swap modifier classes to switch between each style.
                                </p>
                                <p>
                                    The base <code>.nav</code> component is built with flexbox and provide a strong foundation for building all types of navigation components. 
                                    It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.
                                </p>
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

export default SectionOne