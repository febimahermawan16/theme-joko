import React from 'react'
import { Card, CardHeader, CardBody, CardSubtitle, CardTitle, Table } from 'reactstrap'

function DisplayHeading() {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>Display Headings</CardTitle>
                    <CardSubtitle>
                        Traditional heading elements are designed to work best in the meat of your page content. 
                        When you need a heading to stand out, consider using a <b>display heading</b>—a larger, slightly more opinionated heading style.
                    </CardSubtitle>
                </CardHeader>
                <CardBody className="scroll-y scroll-dark for-y scroll-thin" style={{height: '365px'}}>
                    <Table>
                        <thead>
                            <tr>
                                <th className="text-start" width="70%">Display</th>
                                <th className="text-end" width="30%">Class Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h1 className="display-1">Text</h1>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.display-1</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h1 className="display-2">Text</h1>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.display-2</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h1 className="display-3">Text</h1>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.display-3</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h1 className="display-4">Text</h1>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.display-4</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h1 className="display-5">Text</h1>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.display-5</code></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h1 className="display-6">Text</h1>
                                </td>
                                <td>
                                    <span className="pull-right"><code>.display-6</code></span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default DisplayHeading
