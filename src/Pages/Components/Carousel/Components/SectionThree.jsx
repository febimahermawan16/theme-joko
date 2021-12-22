import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'
import ImgOne from '../../../../Assets/Images/Carousel/1.jpg'
import ImgTwo from '../../../../Assets/Images/Carousel/2.jpg'
import ImgThree from '../../../../Assets/Images/Carousel/3.jpg'
import ImgFour from '../../../../Assets/Images/Carousel/4.jpg'
import ImgFive from '../../../../Assets/Images/Carousel/5.jpg'
import ImgSix from '../../../../Assets/Images/Carousel/6.jpg'

function SectionThree() {
    return (
        <React.Fragment>
            <Row className="mgb-30">
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Crossfade Effect</CardTitle>
                            <CardSubtitle>
                                Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody className="pda-0 overflowhidden">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
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
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Dark Variant</CardTitle>
                            <CardSubtitle>
                            Add <code>.carousel-dark</code> to the <code>.carousel</code> for darker controls, indicators, and captions.
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody className="pda-0 overflowhidden">
                            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                <div className="carousel-item active">
                                        <img src={ImgFour} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ImgFive} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ImgSix} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Some representative placeholder content for the third slide.</p>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SectionThree
