import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './app.css'

export default function App() : JSX.Element {    
    return(
        <Fragment>
            <div className="container-fluid">
                <div className="text-center">
                    <h1>Todos App</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="card">
                            <div className="modal-header">
                                <h4 className="modal-title">Add new Todo</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Title:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                    <label>Status:</label>
                                        <select className="form-control" required>
                                            <option value="1">Done</option>
                                            <option value="0">In Progress</option>
                                        </select>
                                    </div>
                                    <br/>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success mr-2">Add</button>
                                        <button type="submit" className="btn btn-danger">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-2"></span>Add new Todo
                        </button>

                        <div className="row mt-3">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Status</button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">All</a>
                                            <a className="dropdown-item" href="#">In progress</a>
                                            <a className="dropdown-item" href="#">Done</a>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Type your keyword..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">
                                            <span className="fa fa-search mr-2"></span> Search
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Sort <span className="fa fa-caret-square-o-down ml-2"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>
                                            <a role="button">
                                                <span className="fa fa-sort-alpha-asc pr-5">Title A-Z</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button">
                                                <span className="fa fa-sort-alpha-desc pr-5">Title Z-A</span>
                                            </a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a role="button">Status In progress</a>
                                            </li>
                                        <li>
                                            <a role="button">Status Done</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

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
                                                <span className="label label-success">Done</span>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" className="btn btn-info mr-2">
                                                    <span className="fa fa-pencil-alt mr-1"></span> Edit
                                                </button>
                                                <button type="button" className="btn btn-danger">
                                                    <span className="fa fa-trash mr-1"></span> Remove
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const root = document.getElementById('app-root')

ReactDom.render(<App />, root)