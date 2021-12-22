import React from 'react'
import { Card, CardHeader, CardBody, CardSubtitle, CardTitle, Table } from 'reactstrap'

function FontWeight() {
    return (
        <React.Fragment>
            <Card>
            <CardHeader>
                    <CardTitle>Text Weight</CardTitle>
                    <CardSubtitle>
                        Available to use light and bold font-weight. Use <code>.text-lighter</code> for light heading and <code>.text-bold</code> for bold headings along with heading tags or classes.
                        And use <code>text-w-*</code> for using text with spesific weight.
                    </CardSubtitle>
                </CardHeader>
                <CardBody>
                    <div className="table-responsive scroll-dark for-x scroll-thin">
                        <Table className="table" style={{minWidth: '1250px'}}>
                            <thead>
                                <tr>
                                    <th className="text-center" width="9%">Normal<br/><code>.text-normal</code></th>
                                    <th className="text-center" width="9%">Lighter<br/><code>.text-lighter</code></th>
                                    <th className="text-center" width="9%">Bold<br/><code>.text-bold</code></th>
                                    <th className="text-center" width="9%">W-100<br/><code>.text-w-100</code></th>
                                    <th className="text-center" width="9%">W-200<br/><code>.text-w-200</code></th>
                                    <th className="text-center" width="9%">W-300<br/><code>.text-w-300</code></th>
                                    <th className="text-center" width="9%">W-400<br/><code>.text-w-400</code></th>
                                    <th className="text-center" width="9%">W-500<br/><code>.text-w-500</code></th>
                                    <th className="text-center" width="9%">W-600<br/><code>.text-w-600</code></th>
                                    <th className="text-center" width="9%">W-700<br/><code>.text-w-700</code></th>
                                    <th className="text-center" width="9%">W-900<br/><code>.text-w-900</code></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td>
                                        <span className="h1 text-normal">Text</span>
                                    </td>
                                    <td>
                                        <span className="h1 text-lighter">Text</span>
                                    </td>
                                    <td>
                                        <span className="h1 text-bold">Text</span>
                                    </td>
                                    <td>
                                        <span className="h1 text-w-100">Text</span>
                                    </td>
                                    <td>
                                        <span className="h1 text-w-200">Text</span>
                                    </td>
                                    <td>
                                        <span className="h1 text-w-300">Text</span>
                                    </td>
                                    <td>
                                        <span className="h1 text-w-400">Text</span>
                                    </td>
                                    <td>
                                        <span className="h1 text-w-500">Text</span>
                                    </td>
                                    <td>
                                        <span className="h1 text-w-600">Text</span>
                                    </td>
                                    <td>
                                        <span className="h1 text-w-700">Text</span>
                                    </td>
                                    <td>
                                        <span className="h1 text-w-900">Text</span>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td>
                                        <span className="h2 text-normal">Text</span>
                                    </td>
                                    <td>
                                        <span className="h2 text-lighter">Text</span>
                                    </td>
                                    <td>
                                        <span className="h2 text-bold">Text</span>
                                    </td>
                                    <td>
                                        <span className="h2 text-w-100">Text</span>
                                    </td>
                                    <td>
                                        <span className="h2 text-w-200">Text</span>
                                    </td>
                                    <td>
                                        <span className="h2 text-w-300">Text</span>
                                    </td>
                                    <td>
                                        <span className="h2 text-w-400">Text</span>
                                    </td>
                                    <td>
                                        <span className="h2 text-w-500">Text</span>
                                    </td>
                                    <td>
                                        <span className="h2 text-w-600">Text</span>
                                    </td>
                                    <td>
                                        <span className="h2 text-w-700">Text</span>
                                    </td>
                                    <td>
                                        <span className="h2 text-w-900">Text</span>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td>
                                        <span className="h3 text-normal">Text</span>
                                    </td>
                                    <td>
                                        <span className="h3 text-lighter">Text</span>
                                    </td>
                                    <td>
                                        <span className="h3 text-bold">Text</span>
                                    </td>
                                    <td>
                                        <span className="h3 text-w-100">Text</span>
                                    </td>
                                    <td>
                                        <span className="h3 text-w-200">Text</span>
                                    </td>
                                    <td>
                                        <span className="h3 text-w-300">Text</span>
                                    </td>
                                    <td>
                                        <span className="h3 text-w-400">Text</span>
                                    </td>
                                    <td>
                                        <span className="h3 text-w-500">Text</span>
                                    </td>
                                    <td>
                                        <span className="h3 text-w-600">Text</span>
                                    </td>
                                    <td>
                                        <span className="h3 text-w-700">Text</span>
                                    </td>
                                    <td>
                                        <span className="h3 text-w-900">Text</span>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td>
                                        <span className="h4 text-normal">Text</span>
                                    </td>
                                    <td>
                                        <span className="h4 text-lighter">Text</span>
                                    </td>
                                    <td>
                                        <span className="h4 text-bold">Text</span>
                                    </td>
                                    <td>
                                        <span className="h4 text-w-100">Text</span>
                                    </td>
                                    <td>
                                        <span className="h4 text-w-200">Text</span>
                                    </td>
                                    <td>
                                        <span className="h4 text-w-300">Text</span>
                                    </td>
                                    <td>
                                        <span className="h4 text-w-400">Text</span>
                                    </td>
                                    <td>
                                        <span className="h4 text-w-500">Text</span>
                                    </td>
                                    <td>
                                        <span className="h4 text-w-600">Text</span>
                                    </td>
                                    <td>
                                        <span className="h4 text-w-700">Text</span>
                                    </td>
                                    <td>
                                        <span className="h4 text-w-900">Text</span>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td>
                                        <span className="h5 text-normal">Text</span>
                                    </td>
                                    <td>
                                        <span className="h5 text-lighter">Text</span>
                                    </td>
                                    <td>
                                        <span className="h5 text-bold">Text</span>
                                    </td>
                                    <td>
                                        <span className="h5 text-w-100">Text</span>
                                    </td>
                                    <td>
                                        <span className="h5 text-w-200">Text</span>
                                    </td>
                                    <td>
                                        <span className="h5 text-w-300">Text</span>
                                    </td>
                                    <td>
                                        <span className="h5 text-w-400">Text</span>
                                    </td>
                                    <td>
                                        <span className="h5 text-w-500">Text</span>
                                    </td>
                                    <td>
                                        <span className="h5 text-w-600">Text</span>
                                    </td>
                                    <td>
                                        <span className="h5 text-w-700">Text</span>
                                    </td>
                                    <td>
                                        <span className="h5 text-w-900">Text</span>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td>
                                        <span className="h6 text-normal">Text</span>
                                    </td>
                                    <td>
                                        <span className="h6 text-lighter">Text</span>
                                    </td>
                                    <td>
                                        <span className="h6 text-bold">Text</span>
                                    </td>
                                    <td>
                                        <span className="h6 text-w-100">Text</span>
                                    </td>
                                    <td>
                                        <span className="h6 text-w-200">Text</span>
                                    </td>
                                    <td>
                                        <span className="h6 text-w-300">Text</span>
                                    </td>
                                    <td>
                                        <span className="h6 text-w-400">Text</span>
                                    </td>
                                    <td>
                                        <span className="h6 text-w-500">Text</span>
                                    </td>
                                    <td>
                                        <span className="h6 text-w-600">Text</span>
                                    </td>
                                    <td>
                                        <span className="h6 text-w-700">Text</span>
                                    </td>
                                    <td>
                                        <span className="h6 text-w-900">Text</span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default FontWeight
