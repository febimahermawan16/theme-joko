import React from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap'

function SectionSeven() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Vertical Tabs</CardTitle>
                        </CardHeader>
                        <CardBody>
                        <div className="d-flex align-items-start">
                            <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active" id="v-tabs-home-tab" data-bs-toggle="tab" data-bs-target="#v-tabs-home" type="button" role="tab" aria-controls="v-tabs-home" aria-selected="true">Home</button>
                                <button className="nav-link" id="v-tabs-profile-tab" data-bs-toggle="tab" data-bs-target="#v-tabs-profile" type="button" role="tab" aria-controls="v-tabs-profile" aria-selected="false">Profile</button>
                                <button className="nav-link" id="v-tabs-messages-tab" data-bs-toggle="tab" data-bs-target="#v-tabs-messages" type="button" role="tab" aria-controls="v-tabs-messages" aria-selected="false">Messages</button>
                                <button className="nav-link" id="v-tabs-settings-tab" data-bs-toggle="tab" data-bs-target="#v-tabs-settings" type="button" role="tab" aria-controls="v-tabs-settings" aria-selected="false">Settings</button>
                            </div>
                            <div className="tab-content" id="v-tabs-tabContent">
                                <div className="tab-pane fade show active" id="v-tabs-home" role="tabpanel" aria-labelledby="v-tabs-home-tab">
                                    <p className='mgt-15 text-lh-15'>
                                        <b>This is some placeholder content the Contact tab's associated content</b>. 
                                        Clicking another tab will toggle the visibility of this one for the next. 
                                        The tab JavaScript swaps classes to control the content visibility and styling. 
                                        You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="v-tabs-profile" role="tabpanel" aria-labelledby="v-tabs-profile-tab">
                                    <p className='mgt-15 text-lh-15'>
                                        <b>This is some placeholder content the Contact tab's associated content</b>. 
                                        Clicking another tab will toggle the visibility of this one for the next. 
                                        The tab JavaScript swaps classes to control the content visibility and styling. 
                                        You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="v-tabs-messages" role="tabpanel" aria-labelledby="v-tabs-messages-tab">
                                    <p className='mgt-15 text-lh-15'>
                                        <b>This is some placeholder content the Contact tab's associated content</b>. 
                                        Clicking another tab will toggle the visibility of this one for the next. 
                                        The tab JavaScript swaps classes to control the content visibility and styling. 
                                        You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="v-tabs-settings" role="tabpanel" aria-labelledby="v-tabs-settings-tab">
                                    <p className='mgt-15 text-lh-15'>
                                        <b>This is some placeholder content the Contact tab's associated content</b>. 
                                        Clicking another tab will toggle the visibility of this one for the next. 
                                        The tab JavaScript swaps classes to control the content visibility and styling. 
                                        You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Vertical Pills</CardTitle>
                        </CardHeader>
                        <CardBody>
                        <div className="d-flex align-items-start">
                            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                            </div>
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <p className='mgt-15 text-lh-15'>
                                        <b>This is some placeholder content the Contact tab's associated content</b>. 
                                        Clicking another tab will toggle the visibility of this one for the next. 
                                        The tab JavaScript swaps classes to control the content visibility and styling. 
                                        You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <p className='mgt-15 text-lh-15'>
                                        <b>This is some placeholder content the Contact tab's associated content</b>. 
                                        Clicking another tab will toggle the visibility of this one for the next. 
                                        The tab JavaScript swaps classes to control the content visibility and styling. 
                                        You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <p className='mgt-15 text-lh-15'>
                                        <b>This is some placeholder content the Contact tab's associated content</b>. 
                                        Clicking another tab will toggle the visibility of this one for the next. 
                                        The tab JavaScript swaps classes to control the content visibility and styling. 
                                        You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <p className='mgt-15 text-lh-15'>
                                        <b>This is some placeholder content the Contact tab's associated content</b>. 
                                        Clicking another tab will toggle the visibility of this one for the next. 
                                        The tab JavaScript swaps classes to control the content visibility and styling. 
                                        You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                    </p>
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

export default SectionSeven
