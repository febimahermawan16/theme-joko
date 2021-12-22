import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionFour() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <h3 className='mgb-30'>Tabs &amp; Pills components</h3>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Tabs</CardTitle>
                            <CardSubtitle>
                                Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface. 
                                Use them to create tabbable regions with our <Link to={{ pathname:'https://getbootstrap.com/docs/5.0/components/navs-tabs/#javascript-behavior' }} target='_blank'>tab JavaScript plugin</Link>.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <Link to='/components-navs-tabs' className='nav-link active' aria-current='page'>Active</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/components-navs-tabs' className='nav-link'>Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/components-navs-tabs' className='nav-link'>Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/components-navs-tabs' className='nav-link disabled' aria-disabled='true' tabIndex='-1'>Disabled</Link>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Pills</CardTitle>
                            <CardSubtitle>
                                Takes the basic nav from above and adds the <code>.nav-pills</code> class to generate a tabbed interface. 
                                Use them to create tabbable regions with our <Link to={{ pathname:'https://getbootstrap.com/docs/5.0/components/navs-tabs/#javascript-behavior' }} target='_blank'>tab JavaScript plugin</Link>.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <Link to='/components-navs-tabs' className='nav-link active' aria-current='page'>Active</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/components-navs-tabs' className='nav-link'>Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/components-navs-tabs' className='nav-link'>Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/components-navs-tabs' className='nav-link disabled' aria-disabled='true' tabIndex='-1'>Disabled</Link>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionFour
