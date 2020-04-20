import React, { Component, Fragment } from 'react'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './app.css'

import Form from './components/Form'
import Filter from './components/Filter'
import List from './components/List'

interface AppProps {

}

interface AppState {
    showForm:  boolean
}

export default class App extends Component<AppProps, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            showForm: false
        }
    }

    toggleForm = (action?: string) => {
        console.log(action)
        if (action) {
            this.setState({
                showForm: action === 'open' ? true : false
            });
        } else {
            this.setState({
                showForm: !this.state.showForm
            });
        }
    }

    render(): JSX.Element {
        let {showForm} = this.state
        let form = showForm ? <Form showForm={showForm} onCloseForm={() => this.toggleForm('close')} /> : ''

        return(
            <Fragment>
                <div className="container-fluid">
                    <div className="text-center">
                        <h1>Todos App</h1>
                        <hr/>
                    </div>

                    <div className="row">
                        {/* Form add or edit Todo */}
                        {form}

                        <div className={showForm ? 'col-md-8' : 'col-md-12'}>
                            <button type="button" className="btn btn-primary" onClick={() => this.toggleForm('open')}>
                                <span className="fa fa-plus mr-1"></span> Add new Todo
                            </button>

                            {/* Filter: search, sort */}
                            <Filter />

                            {/* List Todo */}
                            <List />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
