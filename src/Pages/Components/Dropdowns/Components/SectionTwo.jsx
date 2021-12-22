import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionTwo() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Split Buttons</CardTitle>
                            <CardSubtitle>
                                Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="btn-group mgr-10 mgb-10">
                                <button type="button" className="btn btn-primary">Primary</button>
                                <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
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
                            <div className="btn-group mgr-10 mgb-10">
                                <button type="button" className="btn btn-secondary">Secondary</button>
                                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
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
                            <div className="btn-group mgr-10 mgb-10">
                                <button type="button" className="btn btn-success">Success</button>
                                <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
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
                            <div className="btn-group mgr-10 mgb-10">
                                <button type="button" className="btn btn-danger">Danger</button>
                                <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
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
                            <div className="btn-group mgr-10 mgb-10">
                                <button type="button" className="btn btn-warning">Warning</button>
                                <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
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
                            <div className="btn-group mgr-10 mgb-10">
                                <button type="button" className="btn btn-info">Info</button>
                                <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
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
                            <div className="btn-group mgr-10 mgb-10">
                                <button type="button" className="btn btn-dark">Dark</button>
                                <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
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
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionTwo
