import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonGroup, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionThree() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Dropdown With Flat Button</CardTitle>
                            <CardSubtitle>
                                To use flat button on dropdown, you can use <code>.btn-flat-*</code> beside <code>.btn</code> class
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ButtonGroup>
                                <div className="dropdown mgr-10">
                                    <button className="btn btn-flat-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <div className="dropdown mgr-10">
                                    <button className="btn btn-flat-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <div className="dropdown mgr-10">
                                    <button className="btn btn-flat-success dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <div className="dropdown mgr-10">
                                    <button className="btn btn-flat-danger dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <div className="dropdown mgr-10">
                                    <button className="btn btn-flat-warning dropdown-toggle" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <div className="dropdown mgr-10">
                                    <button className="btn btn-flat-info dropdown-toggle" type="button" id="dropdownMenuButton6" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <div className="dropdown mgr-10">
                                    <button className="btn btn-flat-dark dropdown-toggle" type="button" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false">
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
                            </ButtonGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionThree
