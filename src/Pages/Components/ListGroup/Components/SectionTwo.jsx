import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionTwo() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Disabled Items</CardTitle>
                            <CardSubtitle>
                                Add .disabled to a <code>.list-group-item</code> to make it appear disabled. 
                                Note that some elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-group">
                                <Link to="/" className='list-group-item disabled' aria-disabled='true'>A Disabled Item</Link>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A fourth item</li>
                                <li className="list-group-item">And a fifth one</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Flush</CardTitle>
                            <CardSubtitle>
                                You can add <code>.list-group-flush</code> class to remove some borders and rounded corners to render list group 
                                items edge-to-edge in a parent container (e.g., cards).
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A fourth item</li>
                                <li className="list-group-item">And a fifth one</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionTwo
