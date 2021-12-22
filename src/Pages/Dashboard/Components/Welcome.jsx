import React, { Component } from 'react'
import { GitHub } from 'react-feather'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import Image1 from '../../../Assets/Images/Overview/1.jpeg'
import Image2 from '../../../Assets/Images/Overview/2.jpeg'
import Image3 from '../../../Assets/Images/Overview/3.jpeg'
import Image4 from '../../../Assets/Images/Overview/4.jpeg'
import Image5 from '../../../Assets/Images/Overview/5.jpg'

export class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="df-algn-ct mgt-50">
                    <Col lg="4" md="4" sm="12" className="text-center mgb-50">
                        <h1>Hi There 🎉!</h1>
                        <h5 className="mgt-35">
                            This is my first <Link to={{pathname: 'https://reactjs.org'}} target="_blank">ReactJS</Link> theme. 
                            I hope can finish this theme and share to all of you, if you want you can download this theme on github. 
                        </h5>
                        <span className="df-fdr df-algn-jtfct-ct mgt-60">
                            <Link to="/typography" className="btn btn-lg btn-primary">Explore</Link>
                            <Link to={{pathname: 'https://github.com/febimahermawan16/theme-joko'}} className="btn btn-lg mgl-10">
                                <GitHub size={20} /> <span className="mgl-5">Open Github</span>
                            </Link>
                        </span>
                    </Col>
                    <Col lg="8" md="8" sm="12">
                        <Row className="df-algn-ct">
                            <Col lg="4" md="4" sm="12">
                                <div className="image-overview">
                                    <img src={Image2} className="img-fluid" alt="" />
                                </div>
                                <div className="image-overview mgt-25">
                                    <img src={Image4} className="img-fluid" alt="" />
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12" className="mgt-25">
                                <div className="image-overview">
                                    <img src={Image5} className="img-fluid" alt="" />
                                </div>
                                <div className="image-overview mgt-25">
                                    <img src={Image3} className="img-fluid" alt="" />
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12" className="mgt-25">
                                <div className="image-overview">
                                    <img src={Image1} className="img-fluid" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Welcome
