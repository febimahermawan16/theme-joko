import React from 'react'
// import { Link } from 'react-router-dom'

function TooltipsPopovers() {
    return (
        <React.Fragment>
            <div className="modal fade" id="exampleModalPopovers" tabIndex="-1" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalPopoversLabel">Tooltips &amp; Popovers On Dialog</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Not ready yet...
                            {/* <h5>Popover in a modal</h5>
                            <p>
                                This 
                                <Link to='/components-modals'  className="btn btn-primary popover-test" title='Popover title' data-bs-content="Popover body content is set in this attribute." role='button'>Button</Link>
                                <a href="#" role="button" className="btn btn-secondary popover-test" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a>
                                triggers a popover on click.
                            </p>
                            <hr />
                            <h5>Tooltips in a modal</h5>
                            <p>
                                <Link to='/components-modals' className="tooltip-test" title="Tooltip">This link</Link>&nbsp;
                                and&nbsp;
                                <Link to='/components-modals' className="tooltip-test" title="Tooltip">that link</Link>&nbsp;
                                have tooltips on hover.
                            </p> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TooltipsPopovers
