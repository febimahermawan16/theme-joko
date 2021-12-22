import React from 'react'
import { Card, CardHeader, CardBody, CardSubtitle, CardTitle, Table } from 'reactstrap'

function Heading() {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>HTML Headings</CardTitle>
                    <CardSubtitle>
                        All HTML Heading size from <code>h1</code> through <code>h6</code> are available. 
                        Heading Class also available from <code>.h1</code> through <code>.h6</code>. 
                        And these all size detail from every heading.
                    </CardSubtitle>
                </CardHeader>
                <CardBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>Heading</th>
                                <th>Font Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><h1>Heading 1</h1></td>
                                <td><code>2 rem</code></td>
                            </tr>
                            <tr>
                                <td><h2>Heading 2</h2></td>
                                <td><code>1.714 rem</code></td>
                            </tr>
                            <tr>
                                <td><h3>Heading 3</h3></td>
                                <td><code>1.5 rem</code></td>
                            </tr>
                            <tr>
                                <td><h4>Heading 4</h4></td>
                                <td><code>1.286 rem</code></td>
                            </tr>
                            <tr>
                                <td><h5>Heading 5</h5></td>
                                <td><code>1.07 rem</code></td>
                            </tr>
                            <tr>
                                <td><h6>Heading 6</h6></td>
                                <td><code>1 rem</code></td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default Heading
