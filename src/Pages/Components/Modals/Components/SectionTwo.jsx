import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

// Components
import BasicModal from './BasicModal'
import StaticBackdrop from './StaticBackdrop'
import ScrollingLongContent from './ScrollingLongContent'
import ScrollingOnDialog from './ScrollingOnDialog'
import VerticallyCentered from './VerticallyCentered'
import VerticallyCenteredScrollable from './VerticallyCenteredScrollable'
import TooltipsPopovers from './TooltipsPopovers'
import SmallModal from './SmallModal'
import LargeModal from './LargeModal'
import ExtraLargeModal from './ExtraLargeModal'
import FullScreenModal from './FullScreenModal'
import ColoredPrimary from './ColoredPrimary'
import ColoredSecondary from './ColoredSecondary'
import ColoredSuccess from './ColoredSuccess'
import ColoredDanger from './ColoredDanger'
import ColoredWarning from './ColoredWarning'
import ColoredInfo from './ColoredInfo'
import ColoredDark from './ColoredDark'

function SectionTwo() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Live Demo</CardTitle>
                            <CardSubtitle>
                                Bootstrap show you examples of modal components, and these are some of them.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            
                            <div className="btn-area">
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#exampleModal">Basic</button>
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Static Backdrop</button>
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#exampleModalLong">Scrolling Long Content</button>
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">Scrolling On Dialog</button>
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Vertically Centered</button>
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">Vertically Centered Scrollable</button>
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#exampleModalPopovers">Tooltips &amp; Popovers</button>
                            </div>

                            <BasicModal />
                            <StaticBackdrop />
                            <ScrollingLongContent />
                            <ScrollingOnDialog />
                            <VerticallyCentered />
                            <VerticallyCenteredScrollable />
                            <TooltipsPopovers />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Variant components</CardTitle>
                            <CardSubtitle>
                                For enriching components bootstrap has provided several sizes and we add some color for it.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            
                            <div className="btn-area">
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#smallModal">Small</button>
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#largeModal">Large</button>
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#extralargeModal">Extra Large</button>
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#fullScreenModal">FullScreen</button>
                            </div>
                            <hr />
                            <div className="btn-area">
                                <button type="button" className="btn btn-outline-primary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#coloredPrimaryModal">Primary</button>
                                <button type="button" className="btn btn-outline-secondary mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#coloredSecondaryModal">Secondary</button>
                                <button type="button" className="btn btn-outline-success mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#coloredSuccessModal">Success</button>
                                <button type="button" className="btn btn-outline-danger mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#coloredDangerModal">Danger</button>
                                <button type="button" className="btn btn-outline-warning mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#coloredWarningModal">Warning</button>
                                <button type="button" className="btn btn-outline-info mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#coloredInfoModal">Info</button>
                                <button type="button" className="btn btn-outline-dark mgr-10 mgb-10" data-bs-toggle="modal" data-bs-target="#coloredDarkModal">Dark</button>
                            </div>

                            <SmallModal />
                            <LargeModal />
                            <ExtraLargeModal />
                            <FullScreenModal />

                            <ColoredPrimary />
                            <ColoredSecondary />
                            <ColoredSuccess />
                            <ColoredDanger />
                            <ColoredWarning />
                            <ColoredInfo />
                            <ColoredDark />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionTwo
