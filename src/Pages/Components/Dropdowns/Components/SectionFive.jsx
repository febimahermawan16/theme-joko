import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionFive() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Dropdown With Button Sizing</CardTitle>
                            <CardSubtitle>
                                You can use <code>.btn-[sm, lg, xlg]</code> beside <code>.btn</code> class to use different size.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <Col lg="12" md="12" sm="12" className='mgb-10'>
                                <div className="btn-group dropup mgr-10 mgb-10">
                                    <button className="btn btn-sm btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Small
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
                                    <button className="btn btn-sm btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Small
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
                                    <button className="btn btn-sm btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Small
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
                                    <button className="btn btn-sm btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Small
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
                            <Col lg="12" md="12" sm="12" className='mgb-10'>
                                <div className="btn-group dropup mgr-10 mgb-10">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Normal
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
                                        Normal
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
                                        Normal
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
                                        Normal
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
                            <Col lg="12" md="12" sm="12" className='mgb-10'>
                                <div className="btn-group dropup mgr-10 mgb-10">
                                    <button className="btn btn-lg btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Large
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
                                    <button className="btn btn-lg btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Large
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
                                    <button className="btn btn-lg btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Large
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
                                    <button className="btn btn-lg btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Large
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
                            <Col lg="12" md="12" sm="12" className='mgb-10'>
                                <div className="btn-group dropup mgr-10 mgb-10">
                                    <button className="btn btn-xlg btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Extra Large
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
                                    <button className="btn btn-xlg btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Extra Large
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
                                    <button className="btn btn-xlg btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Extra Large
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
                                    <button className="btn btn-xlg btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Extra Large
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

export default SectionFive
