import React from 'react'
import { Card, CardHeader, CardBody, CardSubtitle, CardTitle, Table } from 'reactstrap'

function InjectedColor() {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>Injected Color</CardTitle>
                    <CardSubtitle>
                        We create spesific color for text. Insert <code>tcolor-*</code> in to class element. And these all color available.
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
                                    <h4 className="tcolor-theme">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.tcolor-theme</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="tcolor-card-subtitle">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.tcolor-card-subtitle</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="tcolor-white">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.tcolor-white</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="tcolor-white-2">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.tcolor-white-2</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="tcolor-white-3">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.tcolor-white-3</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="tcolor-black">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.tcolor-black</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="tcolor-black-2">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.tcolor-black-2</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 className="tcolor-black-3">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.tcolor-black-3</code></span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default InjectedColor
