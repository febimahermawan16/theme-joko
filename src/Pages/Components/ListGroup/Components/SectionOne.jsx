import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Example</CardTitle>
                            <CardSubtitle>
                                The most basic list group is an unordered list with list items and the proper classes. 
                                Build upon it with the options that follow, or with your own CSS as needed.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-group">
                                <li className="list-group-item">An item</li>
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
                            <CardTitle>Active Items</CardTitle>
                            <CardSubtitle>
                                Add .active to a .list-group-item to indicate the current active selection.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">An active item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A fourth item</li>
                                <li className="list-group-item">A fifth item</li>
                                <li className="list-group-item">And a sixth one</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionOne