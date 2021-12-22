import React from 'react'

function ScrollingOnDialog() {
    return (
        <React.Fragment>
            <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableLabel">Scrolling On Dialog</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body scroll-semi-dark for-y scroll-thin">
                            <p className="text-lh-15">You can also create a scrollable modal that allows scroll the modal body by adding <code>.modal-dialog-scrollable</code> to <code>.modal-dialog</code>.</p>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <p>This content should appear at the bottom after you scroll.</p>
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

export default ScrollingOnDialog
