import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionFour() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Margined</CardTitle>
                            <CardSubtitle>This is example for the margined accordion. Insert <code>.margined</code> beside <code>.accordion-item</code> class to use it.</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="accordion" id="accordionMarginExample">
                                <div className="accordion-item margined">
                                    <h2 className="accordion-header" id="headingMarginOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMarginOne" aria-expanded="false" aria-controls="collapseMarginOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="collapseMarginOne" className="accordion-collapse collapse" aria-labelledby="headingMarginOne" data-bs-parent="#accordionMarginExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item margined">
                                    <h2 className="accordion-header" id="headingMarginTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMarginTwo" aria-expanded="false" aria-controls="collapseMarginTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseMarginTwo" className="accordion-collapse collapse" aria-labelledby="headingMarginTwo" data-bs-parent="#accordionMarginExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item margined">
                                    <h2 className="accordion-header" id="headingMarginThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMarginThree" aria-expanded="false" aria-controls="collapseMarginThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseMarginThree" className="accordion-collapse collapse" aria-labelledby="headingMarginThree" data-bs-parent="#accordionMarginExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
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

export default SectionFour
