import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionFour() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Dropdown Position</CardTitle>
                            <CardSubtitle>
                                To use different position you can insert <code>.dropup, dropdown, dropstart, dropend</code> beside <code>.btn-group</code> class
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <Col lg="12" md="12" sm="12">
                                <div className="btn-group dropup mgr-10 mgb-10">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropup
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Action</Link>
                                        </li>
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Another Action</Link>
                                        </li>
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Something Else Here</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn-group dropend mgr-10 mgb-10">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropend
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Action</Link>
                                        </li>
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Another Action</Link>
                                        </li>
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Something Else Here</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn-group dropdown mgr-10 mgb-10">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Action</Link>
                                        </li>
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Another Action</Link>
                                        </li>
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Something Else Here</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn-group dropstart mgr-10 mgb-10">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropstart
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Action</Link>
                                        </li>
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Another Action</Link>
                                        </li>
                                        <li>
                                            <Link to='/components-dropdowns' className='dropdown-item'>Something Else Here</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionFour
