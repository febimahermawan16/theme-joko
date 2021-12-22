import React from 'react'
import { Card, CardHeader, CardBody, CardSubtitle, CardTitle, Table } from 'reactstrap'

function TextElement() {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>Text Element</CardTitle>
                    <CardSubtitle>
                        Html has a lot of elements, and bootstrap restyle all of them. For example we show some, and this is the result.
                    </CardSubtitle>
                </CardHeader>
                <CardBody className="scroll-y scroll-dark for-y scroll-thin" style={{height: '365px'}}>
                    <Table>
                        <thead>
                            <tr>
                                <th className="text-start" width="70%">Text</th>
                                <th className="text-end" width="30%">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4 className="lead">Text</h4>
                                </td>
                                <td>
                                    <span className="pull-right">Insert <code>.lead</code> into your class element to use </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4><mark>Text</mark></h4>
                                </td>
                                <td>
                                    <span className="pull-right">Insert <code>{`<mark></mark>`}</code> tag into your html sheet to use </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4><del>Text</del></h4>
                                </td>
                                <td>
                                    <span className="pull-right">Insert <code>{`<del></del>`}</code> tag into your html sheet to use </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4><s>Text</s></h4>
                                </td>
                                <td>
                                    <span className="pull-right">Insert <code>{`<s></s>`}</code> tag into your html sheet to use </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4><ins>Text</ins></h4>
                                </td>
                                <td>
                                    <span className="pull-right">Insert <code>{`<ins></ins>`}</code> tag into your html sheet to use </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4><u>Text</u></h4>
                                </td>
                                <td>
                                    <span className="pull-right">Insert <code>{`<u></u>`}</code> tag into your html sheet to use </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4><small>Text</small></h4>
                                </td>
                                <td>
                                    <span className="pull-right">Insert <code>{`<small></small>`}</code> tag into your html sheet to use </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4><strong>Text</strong></h4>
                                </td>
                                <td>
                                    <span className="pull-right">Insert <code>{`<strong></strong>`}</code> tag into your html sheet to use </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4><em>Text</em></h4>
                                </td>
                                <td>
                                    <span className="pull-right">Insert <code>{`<em></em>`}</code> tag into your html sheet to use </span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default TextElement
