import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Collapse</CardTitle>
                            <CardSubtitle>
                                Generally, we recommend using a button with the <code>data-bs-target</code> attribute. 
                                While not recommended from a semantic point of view, you can also use a link with the href attribute (and a <code>role="button"</code>). 
                                In both cases, the <code>data-bs-toggle="collapse"</code> is required.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col lg="3" md="3" sm="12">
                                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Link with href
                                    </a>
                                </Col>
                                <Col lg="9" md="9" sm="12">
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Button with data-bs-target
                                    </button>
                                </Col>
                            </Row>
                            <div className="collapse mgt-10" id="collapseExample">
                                <div className="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="12" md="12" sm="12" className='mgt-15'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Multiple Targets</CardTitle>
                            <CardSubtitle>
                                A <code>{`<button>`}</code> or <code>{`<a>`}</code> can show and hide multiple elements by referencing them with a selector in its href or <code>data-bs-target</code> attribute. 
                                Multiple <code>{`<button>`}</code> or <code>{`<a>`}</code> can show and hide an element if they each reference it with their href or <code>data-bs-target</code> attribute
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col lg="4" md="4" sm="12">
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">First</a>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <button class="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Second</button>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                <button class="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Both</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12" md="12" sm="12">
                                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                                        <div class="card card-body">
                                            Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="12" md="12" sm="12">
                                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                                        <div class="card card-body">
                                            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionOne