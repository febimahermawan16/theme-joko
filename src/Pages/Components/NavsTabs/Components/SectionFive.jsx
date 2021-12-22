import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap'

function SectionFive() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Tabs with dropdowns</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <Link to='/components-navs-tabs' className='nav-link active' aria-current='page'>Active</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to="/components-navs-tabs" className='nav-link dropdown-default dropdown-toggle' data-bs-toggle='dropdown' role='button' aria-expanded='false'>Dropdown</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to='components-navs-tabs' className='dropdown-item'>Action</Link></li>
                                        <li><Link to='components-navs-tabs' className='dropdown-item'>Another action</Link></li>
                                        <li><Link to='components-navs-tabs' className='dropdown-item'>Something else here</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link to='components-navs-tabs' className='dropdown-item'>Separated link</Link></li>
                                    </ul>
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
                            <CardTitle>Pills with dropdowns</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <Link to='/components-navs-tabs' className='nav-link active' aria-current='page'>Active</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to="/components-navs-tabs" className='nav-link dropdown-default dropdown-toggle' data-bs-toggle='dropdown' role='button' aria-expanded='false'>Dropdown</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to='components-navs-tabs' className='dropdown-item'>Action</Link></li>
                                        <li><Link to='components-navs-tabs' className='dropdown-item'>Another action</Link></li>
                                        <li><Link to='components-navs-tabs' className='dropdown-item'>Something else here</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link to='components-navs-tabs' className='dropdown-item'>Separated link</Link></li>
                                    </ul>
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

export default SectionFive
