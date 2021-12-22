import React from 'react'
import { Card, CardHeader, CardBody, CardSubtitle, CardTitle, Table } from 'reactstrap'

function FontColor() {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>Text Color</CardTitle>
                    <CardSubtitle>
                        Available use bootstrap text color. Insert <code>text-*</code> in to class element. And these all color available.
                    </CardSubtitle>
                </CardHeader>
                <CardBody className="scroll-y scroll-dark for-y scroll-thin" style={{height: '365px'}}>
                    <Table>
                        <thead>
                            <tr>
                                <th className="text-start" width="70%">Text</th>
                                <th className="text-end" width="30%">Class Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4 className="text-primary">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.text-primary</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="text-secondary">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.text-secondary</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="text-success">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.text-success</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="text-danger">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.text-danger</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="text-warning">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.text-warning</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="text-info">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.text-info</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="text-light">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.text-light</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="text-dark">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.text-dark</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="text-muted">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.text-muted</code></span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default FontColor
