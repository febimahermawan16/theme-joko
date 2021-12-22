import React from 'react'
import { Col, Row, Card, CardHeader, CardTitle, CardSubtitle, CardBody } from 'reactstrap'
import { GitHub } from 'react-feather'
import Avatar from '../../../../Assets/Images/avatar.jpg'

function SectionThree() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>With Status</CardTitle>
                            <CardSubtitle>Insert this class <code>.status .[primary, secondary, success, danger, warning, info, dark]</code> inside <code>.avatar</code> class to use it</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="df-fdr df-algn-ct">
                                <div className="avatar avatar-text sm light-primary mgr-10">
                                    <img src={Avatar} alt="avatar" />
                                    <span className="status primary"></span>
                                </div>
                                <div className="avatar avatar-text sm light-secondary mgr-10">
                                    <img src={Avatar} alt="avatar" />
                                    <span className="status secondary"></span>
                                </div>
                                <div className="avatar avatar-text sm light-success mgr-10">
                                    <img src={Avatar} alt="avatar" />
                                    <span className="status success"></span>
                                </div>
                                <div className="avatar avatar-text sm light-danger mgr-10">
                                    <span className="text"><GitHub /></span>
                                    <span className="status danger"></span>
                                </div>
                                <div className="avatar avatar-text sm light-warning mgr-10">
                                    <span className="text"><GitHub /></span>
                                    <span className="status warning"></span>
                                </div>
                                <div className="avatar avatar-text sm light-info mgr-10">
                                    <span className="text"><GitHub /></span>
                                    <span className="status info"></span>
                                </div>
                                <div className="avatar avatar-text sm light-dark mgr-10">
                                    <span className="text"><GitHub /></span>
                                    <span className="status dark"></span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Avatar Group</CardTitle>
                            <CardSubtitle>Add element with <code>.avatar-group</code> before initialize element for <code>.avatar</code> to use it</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="df-fdr df-algn-ct">
                                <div className="avatar-group">
                                    <div className="avatar sm">
                                        <img src={Avatar} alt="avatar" />
                                    </div>
                                    <div className="avatar sm">
                                        <img src={Avatar} alt="avatar" />
                                    </div>
                                    <div className="avatar sm">
                                        <img src={Avatar} alt="avatar" />
                                    </div>
                                    <div className="avatar sm">
                                        <img src={Avatar} alt="avatar" />
                                    </div>
                                    <div className="avatar sm">
                                        <img src={Avatar} alt="avatar" />
                                    </div>
                                    <div className="avatar sm">
                                        <img src={Avatar} alt="avatar" />
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionThree
