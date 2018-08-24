import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import * as customerActions from '../../../actions/customerActions';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import './../../../map.css';
import Map from './../../common/Map';
import { ToastContainer, toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
// import RadioButton from './../../common/RadioButton';
import DateP from './../../common/DateP';
import ImageUpload from './../../common/ImageUpload';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserId: '',
            First_Name: '',
            DateOfBirth: moment(),
            Phone: '',
            Mail: '',
            Marital_Status: '',
            Address: '',
            country: '',
            region: '',
            file: '',
            imagePreviewUrl: '',
        }
        this.notify = this.notify.bind(this); //toaster
        this.selectCountry = this.selectCountry.bind(this); //dropdown country
        this.selectRegion = this.selectRegion.bind(this); //dropdown region
        this.handleChange_Marital_Status = this.handleChange_Marital_Status.bind(this); //for radio buttons change
    }

    //for data submit
    onSubmitHandler(formData) {
        debugger;
        formData.DateOfBirth = moment(this.state.DateOfBirth).format('DD/MM/YYYY');
        formData.Marital_Status = this.state.Marital_Status;
        formData.Address = this.state.Address;
        formData.country = this.state.country;
        formData.region = this.state.region;
        this.props.actions.addCustomer(formData)
            .then(
            res => {
                this.props.actions.fetchAllCustomers();
            }
            );
    }
  //for radio button change
  handleChange_Marital_Status(event) {
    debugger;
    this.setState({
        Marital_Status: event.target.value
    });
}

    selectCountry(val) {
        this.setState({ country: val });
    }

    selectRegion(val) {
        this.setState({ region: val });
    }

    notify = () => toast("Your record is saved!");

    render() {
        const { handleSubmit } = this.props;
        const { country, region } = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading"> <br />
                        <h3 className="panel-title">
                            Add Employee Details
                        </h3>
                    </div><br />
                    <div className="row">
                        {/* For adding images */}
                        <div className="col-sm-5"> <ImageUpload /> </div>

                        {/* For adding data */}
                        <div className="col-sm-7">
                            <h4><NavLink to="/"><span className="btn btn-primary" aria-hidden="true">Back to Employee List</span> </NavLink></h4>
                            <form to="/index" className="form-horizontal" onSubmit={handleSubmit(this.onSubmitHandler.bind(this))}><br />
                                <table className="table">
                                    <tbody>
                                        <tr> <td> <label> Name : </label> </td>
                                            <td> <Field
                                                name="First_Name" component="input" type="text" required
                                                placeholder="Enter your Name" className="form-control" />
                                            </td>
                                        </tr>

                                        <tr> <td><label>Date of Birth</label></td>
                                            <td> <DateP /> </td>
                                        </tr>

                                        <tr> <td>  <label>Mail : </label> </td>
                                            <td>  <Field
                                                name="Mail" required component="input" type="email"
                                                placeholder="Enter your Email ID" className="form-control" />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td> <label>Phone : </label> </td>
                                            <td> <Field
                                                name="Phone" component="input" type="number" required
                                                placeholder="Enter your Phone" className="form-control" />
                                            </td>
                                        </tr>

                                        <tr> <td> <label>Job Status : </label> </td>
                                            <td> 
                <label>
                    <input
                        type="radio"
                        value="Developer"
                        checked={this.state.Marital_Status === "Developer"}
                        onChange={this.handleChange_Marital_Status}
                    />
                    Developer
                </label> {" "}

                <label>
                    <input
                        type="radio"
                        value="Tester"
                        checked={this.state.Marital_Status === "Tester"}
                        onChange={this.handleChange_Marital_Status}
                    />
                    Tester
                                                    </label>{" "}
                <label>
                    <input
                        type="radio"
                        value="Database Administrator"
                        checked={this.state.Marital_Status === "Database Administrator"}
                        onChange={this.handleChange_Marital_Status}
                    />
                    DBA

                                                    </label>{" "}
                <label>
                    <input
                        type="radio"
                        value="Networking"
                        checked={this.state.Marital_Status === "Networking"}
                        onChange={this.handleChange_Marital_Status}
                    />
                    Networking
                                                    </label>{" "}

             </td>
                                        </tr>

                                        <tr> <td> <label>Address</label></td>
                                            <td> <Map /> </td>
                                        </tr>

                                        <tr>
                                            <td> <label>Country : </label> </td>
                                            <td>    <CountryDropdown
                                                value={country}
                                                onChange={(val) => this.selectCountry(val)} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label>Region : </label> </td>
                                            <td>    <RegionDropdown
                                                disableWhenEmpty={true}
                                                country={country}
                                                value={region}
                                                onChange={(val) => this.selectRegion(val)} />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td> <button type="submit" className="btn btn-primary" onClick={this.notify}> Submit </button> </td>
                                            <td> <button type="reset" className="btn btn-info"> Reset </button> </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                </div>
                <br />
            </div >
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

Create = reduxForm({
    form: 'CreateForm',
    enableReinitialize: true,
})(Create);

export default connect(mapStateToProps, mapDispatchToProps)(Create);