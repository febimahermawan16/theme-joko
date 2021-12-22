import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'
import Avatar from '../../../../Assets/Images/avatar.jpg'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Default</CardTitle>
                            <CardSubtitle>We have create for default avatar, insert in to class attribute for initialize avatar size using <code>.avatar-[xsm, sm, lg, xlg]</code></CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="df-fdr df-algn-ct">
                                <div className="avatar xsm mgr-10">
                                    <img src={Avatar} alt="avatar" />
                                </div>
                                <div className="avatar sm mgr-10">
                                    <img src={Avatar} alt="avatar" />
                                </div>
                                <div className="avatar mgr-10">
                                    <img src={Avatar} alt="avatar" />
                                </div>
                                <div className="avatar lg mgr-10">
                                    <img src={Avatar} alt="avatar" />
                                </div>
                                <div className="avatar xlg mgr-10">
                                    <img src={Avatar} alt="avatar" />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Text Avatar</CardTitle>
                            <CardSubtitle>We have create for default text avatar, insert in to class attribute for initialize avatar size using <code>.avatar-text</code></CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="df-fdr df-algn-ct">
                                <div className="avatar avatar-text xsm light-primary mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text sm light-success mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text light-danger mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text lg light-warning mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text xlg light-info mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionOne
