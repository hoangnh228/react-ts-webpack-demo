import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

export default function Filter() : JSX.Element {    
    return(
        <Fragment>
            <div className="row mt-3">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Status</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">All</a>
                                <a className="dropdown-item" href="#">In progress</a>
                                <a className="dropdown-item" href="#">Done</a>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Type your keyword..." />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <span className="fa fa-search mr-2"></span> Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Title A-Z</a>
                            <a className="dropdown-item" href="#">Title Z-A</a>
                            <a className="dropdown-item" href="#">Status In progress</a>
                            <a className="dropdown-item" href="#">Status Done</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
