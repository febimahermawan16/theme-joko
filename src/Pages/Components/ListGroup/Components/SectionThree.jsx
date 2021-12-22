import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'


function SectionThree() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="12" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Links and Buttons Group</CardTitle>
                            <CardSubtitle>
                            Use <code>{`<a>`}</code>s or <code>{`<button>`}</code>s to create actionable list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. 
                            We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>{`<li>`}</code>s or <code>{`<div>`}</code>s) don't provide a click or tap affordance. 
                            Be sure to <b>not use the standard <code>.btn</code> classes here</b>. 
                            With <code>{`<button>`}</code>s, you can also make use of the <code>disabled</code> attribute instead of the <code>.disabled</code> class. Sadly, <code>{`<a>`}</code>s don't support the disabled attribute.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col lg="6" md="6" sm="12">
                                    <div class="list-group">
                                        <Link to="/components-listgroup" className='list-group-item list-group-item-action active' aria-current="true">
                                            The current link item
                                        </Link>
                                        <Link to='/components-listgroup' className="list-group-item list-group-item-action">A second link item</Link>
                                        <Link to='/components-listgroup' className="list-group-item list-group-item-action">A third link item</Link>
                                        <Link to='/components-listgroup' className="list-group-item list-group-item-action">A fourth link item</Link>
                                        <Link to='/components-listgroup' className="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</Link>
                                    </div>
                                </Col>
                                <Col lg="6" md="6" sm="12">
                                    <div class="list-group">
                                        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                                            The current button
                                        </button>
                                        <button type="button" class="list-group-item list-group-item-action">A second button item</button>
                                        <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                                        <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                                        <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
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

export default SectionThree
