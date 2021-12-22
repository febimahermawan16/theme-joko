import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'

function Header() {
    return (
        <React.Fragment>
            <Row>
                <Col lg="12" md="12" sm="12" className="fdc df-algn-ct mgb-40">
                    <span className="page-title">
                        <h3>Modals</h3>
                        <Breadcrumb className="bc">
                            <BreadcrumbItem>
                                <Link to="/">Main</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/components">Components</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Modals
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </span>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Header