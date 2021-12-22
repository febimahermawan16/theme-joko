import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Dropdown</CardTitle>
                            <CardSubtitle>
                                Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here's how you can put them to work with either <code>{`<button>`}</code> elements
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="btn-group dropdown mgr-10 mgb-10">
                                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Primary
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Secondary
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
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
                                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                    Success
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
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
                                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                                    Danger
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
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
                                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-expanded="false">
                                    Warning
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton5">
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
                                <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton6" data-bs-toggle="dropdown" aria-expanded="false">
                                    Info
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton6">
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
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dark
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton7">
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

export default SectionOne