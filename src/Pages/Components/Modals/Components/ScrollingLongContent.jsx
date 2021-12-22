import React from 'react'

function ScrollingLongContent() {
    return (
        <React.Fragment>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongLabel">Scrolling Long Content</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{minHeight : '1500px'}}>
                            When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
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

export default ScrollingLongContent
