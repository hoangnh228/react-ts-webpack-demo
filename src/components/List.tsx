import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

export default function Filter() : JSX.Element {    
    return(
        <Fragment>
            <div className="row mt-3">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center" style={{ width: '70px' }}>#</th>
                                <th className="text-center">Todo</th>
                                <th className="text-center" style={{ width: '150px' }}>Status</th>
                                <th className="text-center" style={{ width: '250px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td>Học lập trình</td>
                                <td className="text-center">
                                    <span className="badge badge-pill badge-success">Done</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-info btn-sm mr-2">
                                        <span className="fa fa-pencil-alt mr-1"></span> Edit
                                    </button>
                                    <button type="button" className="btn btn-danger btn-sm">
                                        <span className="fa fa-trash"></span> Remove
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">1</td>
                                <td>Học lập trình Nodejs</td>
                                <td className="text-center">
                                    <span className="badge badge-pill badge-danger">In progress</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-info btn-sm mr-2">
                                        <span className="fa fa-pencil-alt mr-1"></span> Edit
                                    </button>
                                    <button type="button" className="btn btn-danger btn-sm">
                                        <span className="fa fa-trash"></span> Remove
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}
