import React from 'react'
import { Card, CardHeader, CardBody, CardSubtitle, CardTitle, Table } from 'reactstrap'

function InjectedFont() {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>Injected Font Size</CardTitle>
                    <CardSubtitle>
                        For more specific font size, we also create on stylesheet for <code>px</code> and <code>rem</code> type. 
                        Use <code>text-*</code> for using <code>px</code>, and <code>text-r-* / text-r-p*</code> for using <code>rem</code>. 
                        And these all size detail for every type.
                    </CardSubtitle>
                </CardHeader>
                <CardBody className="scroll-y scroll-dark for-y scroll-thin" style={{height: '394px'}}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Text</th>
                                <th>Font Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="text-10">.text-10</span></td>
                                <td><code>10px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-11">.text-11</span></td>
                                <td><code>11px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-12">.text-12</span></td>
                                <td><code>12px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-13">.text-13</span></td>
                                <td><code>13px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-14">.text-14</span></td>
                                <td><code>14px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-15">.text-15</span></td>
                                <td><code>15px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-16">.text-16</span></td>
                                <td><code>16px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-17">.text-17</span></td>
                                <td><code>17px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-18">.text-18</span></td>
                                <td><code>18px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-19">.text-19</span></td>
                                <td><code>19px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-20">.text-20</span></td>
                                <td><code>20px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-21">.text-21</span></td>
                                <td><code>21px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-22">.text-22</span></td>
                                <td><code>22px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-23">.text-23</span></td>
                                <td><code>23px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-24">.text-24</span></td>
                                <td><code>24px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-25">.text-25</span></td>
                                <td><code>25px</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-p3">.text-r-p3</span></td>
                                <td><code>.3rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-p35">.text-r-p35</span></td>
                                <td><code>.35rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-p4">.text-r-p4</span></td>
                                <td><code>.4rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-p5">.text-r-p5</span></td>
                                <td><code>.5rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-p6">.text-r-p6</span></td>
                                <td><code>.6rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-p7">.text-r-p7</span></td>
                                <td><code>.7rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-p8">.text-r-p8</span></td>
                                <td><code>.8rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-p9">.text-r-p9</span></td>
                                <td><code>.9rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-1">.text-r-1</span></td>
                                <td><code>1rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-1p5">.text-r-1p5</span></td>
                                <td><code>1.5rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-2">.text-r-2</span></td>
                                <td><code>2rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-2p5">.text-r-2p5</span></td>
                                <td><code>2.5rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-3">.text-r-3</span></td>
                                <td><code>3rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-3p5">.text-r-3p5</span></td>
                                <td><code>3.5rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-4">.text-r-4</span></td>
                                <td><code>4rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-4p5">.text-r-4p5</span></td>
                                <td><code>4.5rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-5">.text-r-5</span></td>
                                <td><code>5rem</code></td>
                            </tr>
                            <tr>
                                <td><span className="text-r-5p5">.text-r-5p5</span></td>
                                <td><code>5.5rem</code></td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default InjectedFont
