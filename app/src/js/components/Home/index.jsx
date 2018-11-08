import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
                    <li className="treeview menu-open">
                        <a href="#">
                            <i className="fa fa-edit"></i> <span>Forms</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="../forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                            <li><a href="../forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                            <li><a href="../forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
                        </ul>
                    </li>
                </div>
                <div className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const connectedHome = connect(mapStateToProps)(HomePage);
export { connectedHome as HomePage };