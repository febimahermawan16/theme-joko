import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'
import ImgOne from '../../../../Assets/Images/Carousel/1.jpg'
import ImgTwo from '../../../../Assets/Images/Carousel/2.jpg'
import ImgThree from '../../../../Assets/Images/Carousel/3.jpg'

function SectionOne() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Slides Only</CardTitle>
                            <CardSubtitle>
                                Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.w-100</code> on carousel images to prevent browser default image alignment.
                                cukup-cukupan ben roto
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody className="pda-0 overflowhidden">
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={ImgOne} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ImgTwo} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ImgThree} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>With controls</CardTitle>
                            <CardSubtitle>
                                Adding in the previous and next controls. We recommend using <code>{`<button>`}</code> elements, but you can also use <code>{`<a>`}</code> elements with <code>role="button"</code>.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody className="pda-0 overflowhidden">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={ImgOne} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ImgTwo} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ImgThree} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionOne
