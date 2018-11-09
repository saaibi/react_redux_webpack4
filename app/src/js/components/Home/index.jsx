import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {
    render() {

        return (
            <div className="container-fluid">
                <div className="row flex-xl-nowrap">
                    <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
                        <ul id="treeview">
                            <li className="fa fa-inbox" data-expanded="false">Inbox
                                <ul>
                                    <li><b>Today (2)</b></li>
                                    <li>Monday</li>
                                    <li>Last Week</li>
                                </ul>
                            </li>
                            <li data-icon-cls="fa fa-trash">Trash
                            </li>
                            <li data-icon-cls="fa fa-calendar">Calendar
                                <ul>
                                    <li>Day</li>
                                    <li>Week</li>
                                    <li>Month</li>
                                </ul>
                            </li>
                            <li data-icon-cls="fa fa-user">Contacts
                                <ul>
                                    <li>Alexander Stein</li>
                                    <li>John Doe</li>
                                    <li>Paul Smith</li>
                                    <li>Steward Lynn</li>
                                </ul>
                            </li>
                            <li data-icon-cls="fa fa-folder">Folders
                                <ul>
                                    <li>Backup</li>
                                    <li>Deleted</li>
                                    <li>Projects</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                        <p>hellooo!!!!</p>
                    </main>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const connectedHome = connect(mapStateToProps)(HomePage);
export { connectedHome as HomePage };