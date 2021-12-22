import React from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap'

function SectionSix() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <h3 className='mgb-30'>Tabs Content</h3>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Tabs</CardTitle>
                        </CardHeader>
                        <CardBody>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <p className='mgt-15 text-lh-15'>
                                    <b>This is some placeholder content the Contact tab's associated content</b>. 
                                    Clicking another tab will toggle the visibility of this one for the next. 
                                    The tab JavaScript swaps classes to control the content visibility and styling. 
                                    You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <p className='mgt-15 text-lh-15'>
                                    <b>This is some placeholder content the Contact tab's associated content</b>. 
                                    Clicking another tab will toggle the visibility of this one for the next. 
                                    The tab JavaScript swaps classes to control the content visibility and styling. 
                                    You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <p className='mgt-15 text-lh-15'>
                                    <b>This is some placeholder content the Contact tab's associated content</b>. 
                                    Clicking another tab will toggle the visibility of this one for the next. 
                                    The tab JavaScript swaps classes to control the content visibility and styling. 
                                    You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                </p>
                            </div>
                        </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pills</CardTitle>
                        </CardHeader>
                        <CardBody>
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <p className='mgt-15 text-lh-15'>
                                    <b>This is some placeholder content the Contact tab's associated content</b>. 
                                    Clicking another tab will toggle the visibility of this one for the next. 
                                    The tab JavaScript swaps classes to control the content visibility and styling. 
                                    You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <p className='mgt-15 text-lh-15'>
                                    <b>This is some placeholder content the Contact tab's associated content</b>. 
                                    Clicking another tab will toggle the visibility of this one for the next. 
                                    The tab JavaScript swaps classes to control the content visibility and styling. 
                                    You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <p className='mgt-15 text-lh-15'>
                                    <b>This is some placeholder content the Contact tab's associated content</b>. 
                                    Clicking another tab will toggle the visibility of this one for the next. 
                                    The tab JavaScript swaps classes to control the content visibility and styling. 
                                    You can use it with tabs, pills, and any other <code>.nav-</code>powered navigation.
                                </p>
                            </div>
                        </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionSix
