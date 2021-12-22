import React from 'react'

function VerticallyCentered() {
    return (
        <React.Fragment>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterLabel">Vertically Centered</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body scroll-semi-dark for-y scroll-thin">
                            Add <code>.modal-dialog-centered</code> to <code>.modal-dialog</code> to vertically center the modal.
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

export default VerticallyCentered
