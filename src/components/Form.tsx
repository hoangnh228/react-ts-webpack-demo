import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

interface FormProps {
    showForm: boolean
    onCloseForm(): void
}

export default class Form extends React.Component<FormProps, any> {
    constructor(props: FormProps) {
        super(props)
    }

    closeForm = () => {
        this.props.onCloseForm()
    }

    render(): JSX.Element {
        return(
            <Fragment>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="modal-header">
                            <h4 className="modal-title">Add new Todo</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeForm}>
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
                                    <button type="submit" className="btn btn-danger" onClick={this.closeForm}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
