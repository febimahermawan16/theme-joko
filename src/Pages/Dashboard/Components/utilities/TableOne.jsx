import React from 'react'
import DataTable from 'react-data-table-component'
import { UserList } from '../../../../Lib/Json'

const columns = [
    {
        name: 'Name',
        selector: row => row.full_name,
        sortable: true,
    },
    {
        name: 'Role',
        selector: row => row.role,
        sortable: true,
    },
    {
        name: 'Username',
        selector: row => row.username,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
];

const data = UserList

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
        <input
            htmlFor="booty-check"
            type="checkbox"
            className="form-check-input"
            ref={ref}
            onClick={onClick}
            {...rest}
        />
        <label className="form-check-label" id="booty-check" />
    </div>
));

function TableOne() {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">User List</h5>
                    <p className="tcolor-card-subtitle text-r-p8 mgt-5 mgb-0">All user account's with role and username.</p>
                </div>
                <div className="card-body pdt-0 pdb-0">
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        selectableRows
                        selectableRowsComponent={BootyCheckbox}
                        className="table-user-lists"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default TableOne
