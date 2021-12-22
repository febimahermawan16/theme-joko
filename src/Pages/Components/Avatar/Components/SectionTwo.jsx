import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionTwo() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Light Avatar Text</CardTitle>
                            <CardSubtitle>Insert this class <code>.light-[primary, secondary, success, danger, warning, info, dark]</code> beside <code>.avatar</code> class to use it</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="df-fdr df-algn-ct">
                                <div className="avatar avatar-text sm light-primary mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text sm light-secondary mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text sm light-success mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text sm light-danger mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text sm light-warning mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text sm light-info mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text sm light-dark mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Colored Avatar Text</CardTitle>
                            <CardSubtitle>Insert this class <code>.[primary, secondary, success, danger, warning, info, dark]</code> beside <code>.avatar</code> class to use it</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="df-fdr df-algn-ct">
                                <div className="avatar avatar-text xsm primary mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text xsm secondary mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text xsm success mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text xsm danger mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text xsm warning mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text xsm info mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text xsm light mgr-10">
                                    <span className="text">Avt</span>
                                </div>
                                <div className="avatar avatar-text xsm dark mgr-10">
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

export default SectionTwo
