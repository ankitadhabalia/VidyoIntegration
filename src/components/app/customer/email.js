import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as customerActions from '../../../actions/customerActions';
import { bindActionCreators } from 'redux';

class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toEmail: '',
            From: '',
            Subject: '',
            Body: ''
        }
    }
    onSubmitHandler(formData) {
        debugger;
       
        this.props.actions.addEmail(formData)
            .then(
            res => {
                this.props.actions.fetchAllCustomers();
            }
            );
    }
    render() {
        const { handleSubmit } = this.props;
        return (
          
            <div className="container">
                <div className="panel panel-default">
                    <table className="table">
                    <tbody>
                        <tr>
                            <div className="panel-heading">
                                <td>
                                    <h3 className="panel-title">Send Email to Employees</h3>
                                </td>
                                <td>
                                    <h4><NavLink to="/"><span className="btn btn-primary" aria-hidden="true">Back to Employee List</span> </NavLink></h4>
                                </td>
                            </div>
                        </tr>
                        </tbody>
                    </table>

                    <div id="compose-modal" tabindex="-1" role="dialog">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Compose Mail</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                {/* <form onsubmit="return sendEmail();"> */}
                                <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmitHandler.bind(this))}><br />
                                    <div className="modal-body">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td><label>To : </label></td>
                                                    <td>
                                                        <Field
                                                            name="toEmail" component="input" type="email" required
                                                            placeholder="To" className="form-control" />
                                                    </td>
                                                </tr>
                                                {/* <tr>
                                                    <td><label>From : </label></td>
                                                    <td>
                                                        <Field
                                                            name="From" component="input" type="email" required
                                                            placeholder="From" className="form-control" />
                                                    </td>
                                                </tr> */}
                                                <tr>
                                                    <td><label>Subject : </label></td>
                                                    <td>
                                                        <Field
                                                            name="Subject" component="input" type="text" required
                                                            placeholder="Enter Your Subject" className="form-control" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><label>Body : </label></td>
                                                    <td>
                                                    <Field
                                                            name="Body" component="textarea" type="textarea" required
                                                            placeholder="Enter Your Subject" className="form-control" />
                                                   </td>
                                                </tr>
                                                <tr>
                                                    <td> {/* <button type="button" className="btn btn-danger" >Close</button>*/}</td>
                                                    <td> <button type="submit" className="btn btn-primary" > Send </button> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        product: state.customerR,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(customerActions, dispatch)
    };
}
Email = reduxForm({
    form: 'Email',
    enableReinitialize: true,
})(Email);

export default connect(mapStateToProps, mapDispatchToProps)(Email);