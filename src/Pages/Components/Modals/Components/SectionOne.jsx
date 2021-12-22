import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Modal Components</CardTitle>
                            <CardSubtitle>
                                Below is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). 
                                We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="modal modal-overview" tabIndex="-1">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Modal title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Modal body text goes here.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
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

export default SectionOne