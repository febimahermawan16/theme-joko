import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import { Activity, Archive, CheckSquare, GitPullRequest } from 'react-feather';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap'

export class Statistic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart',
                    toolbar : {
                        show : false
                    },
                    zoom : {
                        enabled : false
                    },
                    dropShadow : {
                        enabled : true,
                        top: 5,
                        blur : 5,
                        color : '#000'
                    }
                },
                colors: ["#B71A29"],
                yaxis: {
                    show : true,
                    labels : {
                        style : {
                            colors : '#FFFFFFB8'
                        }
                    },
                    crosshairs : {
                        show : false
                    }
                },
                xaxis: {
                    labels : {
                        show : true,
                        style : {
                            colors : '#FFFFFFB8'
                        }
                    },
                    axisBorder : {
                        show : false
                    },
                    axisTicks : {
                        show : false
                    },
                    crosshairs : {
                        show : true,
                        stroke : {
                            color : '#FFFFFF5C'
                        }
                    },
                    tooltip: {
                        enabled : false
                    },
                    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September']
                },
                grid: {
                    borderColor : '#FFFFFF0D',
                    yaxis: {
                      lines: {
                        show: true
                      }
                    }
                },
                stroke: {
                    width: 4
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    gradient: {
                        enabled: false,
                        opacityFrom: 0,
                        opacityTo: 0
                    }
                },
                markers: {
                    size: 0,
                    colors: ["#DC3545"],
                    strokeColor: "#B71A29",
                    strokeWidth: 3
                },
                tooltip : {
                    fillSeriesColor : false,
                    marker : {
                        show : false
                    }
                }
            },
            series: [{
                name: 'Project Income',
                data: [30, 10, 90, 20, 70, 70, 75, 60, 55]
            }]
        }
    }
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col lg="12" md="12" sm="12">
                        <Card className="overflowhidden">
                            <CardHeader className="bg-danger no-border">
                                <CardTitle className="text-white">Project Statistic</CardTitle>
                            </CardHeader>
                            <CardBody className="pda-0">
                                <span className="full-width df-fdc bg-danger">
                                    <Chart options={this.state.options} series={this.state.series} type="area" height={320} />
                                </span>
                                <Row className="mgl-0 mgt-0">
                                    <Col lg="6" md="6" sm="6" xs="6" className="mgb-10">
                                        <div className="icon-box-dashboard">
                                            <div className="images text-primary">
                                                <Archive />
                                            </div>
                                            <div className="description">
                                                <span className="value">124</span>
                                                <span className="title">Total Project</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="6" xs="6" className="mgb-10">
                                        <div className="icon-box-dashboard">
                                            <div className="images text-danger">
                                                <CheckSquare />
                                            </div>
                                            <div className="description">
                                                <span className="value">92</span>
                                                <span className="title">Project Finished</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="6" xs="6" className="mgb-10">
                                        <div className="icon-box-dashboard">
                                            <div className="images text-warning">
                                                <Activity />
                                            </div>
                                            <div className="description">
                                                <span className="value">32</span>
                                                <span className="title">Project Pending</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="6" xs="6" className="mgb-10">
                                        <div className="icon-box-dashboard">
                                            <div className="images text-info">
                                                <GitPullRequest />
                                            </div>
                                            <div className="description">
                                                <span className="value">13</span>
                                                <span className="title">Customer Project Request</span>
                                            </div>
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
}

export default Statistic
