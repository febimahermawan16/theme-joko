import React from 'react'

function ColoredDark() {
    return (
        <React.Fragment>
            <div className="modal modal-dark fade" id="coloredDarkModal" tabIndex="-1" aria-labelledby="coloredDarkModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="coloredDarkModalLabel">Dark Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
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

export default ColoredDark
