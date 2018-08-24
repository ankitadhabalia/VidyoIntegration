import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../../../actions/customerActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import RadioButton from '../../common/RadioButton';
import DateP from '../../common/DateP';
import ImageUpload from '../../common/ImageUpload';
import Map from './../../common/Map';
import './../../../map.css';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: this.props.match.params.id,
      First_Name: this.props.product.First_Name,
      DateOfBirth: this.props.product.DateOfBirth,
      Mail: this.props.product.Mail,
      Phone: this.props.product.Phone,
      Marital_Status: this.props.product.Marital_Status,
      Address: this.props.product.Address,
      country: this.props.product.country,
      region: this.props.product.region,
    }
    this.onSubmit = this.onSubmit.bind(this); //for form submit
    this.onChange = this.onChange.bind(this); //for text change while edit
    this.selectCountry = this.selectCountry.bind(this); //dropdown country
    this.selectRegion = this.selectRegion.bind(this); //dropdown region
    this.notify = this.notify.bind(this); //toaster
  }

  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    debugger;
    let editData = {
      "UserId": this.props.match.params.id,
      "First_Name": this.state.First_Name,
      "DateOfBirth": this.state.DateOfBirth,
      "Mail": this.state.Mail,
      "Phone": this.state.Phone,
      "Marital_Status": this.state.Marital_Status,
      "Address": this.state.Address,
      "country": this.state.country,
      "region": this.state.region,
      //"status": this.state.status
    }
    this.props.actions.editCustomer(editData)
      .then(
      res => {
        debugger;
        this.props.actions.fetchAllCustomers();
      }
      );
  }

  selectCountry(val) {
    debugger;
    this.setState({ country: val });
  }

  selectRegion(val) {
    debugger;
    this.setState({ region: val });
  }

  notify = () => toast("Your record is saved!");

  render() {
    const { country, region } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">  <br />
            <h3 class="panel-title">
              Edit Employee Details
            </h3>
          </div> <br />

          <div className="row">
            {/* For editing images */}
            <div className="col-sm-5"> <ImageUpload /> </div>

            {/* For editing data */}
            <div className="col-sm-7">
              <h4><NavLink to="/"><span class="btn btn-primary" aria-hidden="true">Back to Employee List</span> </NavLink></h4>
              <form className="form-horizontal" onSubmit={this.onSubmit}>
                <table className="table">
                  <tbody>
                    <tr>
                      <td> <label> Name:</label></td>
                      <td> <input type="text" className="form-control" name="First_Name" value={this.state.First_Name}
                        onChange={this.onChange} placeholder="Enter your Name" required="required" />
                      </td>
                    </tr>

                    <tr>
                      <td><label>Date of Birth</label></td>
                      <td><DateP /></td>
                    </tr>

                    <tr>
                      <td> <label>Phone:</label></td>
                      <td>
                        <input type="text" className="form-control" name="Phone" value={this.state.Phone}
                          onChange={this.onChange} placeholder="Enter your Phone" required="required" />  </td>
                    </tr>

                    <tr>
                      <td> <label for="title">Mail:</label> </td>
                      <td> <input type="email" className="form-control" name="Mail" value={this.state.Mail}
                        onChange={this.onChange} placeholder="Enter your Email ID" required="required" /> </td>
                    </tr>

                    <tr>
                      <td> <label>Job Status : </label> </td>
                      <td>  <RadioButton /> </td>
                    </tr>

                    <tr>
                      <td> <label for="title"> Address:</label></td>
                      <td><Map /></td>
                    </tr>

                    <tr>
                      <td> <label for="title">Country:</label></td>
                      <td><CountryDropdown
                        value={country}
                        onChange={(val) => this.selectCountry(val)} />
                      </td>
                    </tr>

                    <tr>
                      <td> <label for="title">Region:</label></td>
                      <td><RegionDropdown
                        disableWhenEmpty={true}
                        country={country}
                        value={region}
                        onChange={(val) => this.selectRegion(val)} />
                      </td>
                    </tr>

                    <tr>
                      <td><button type="submit" className="btn btn-primary" onClick={this.notify}> Submit </button></td>
                      <td><button type="reset" className="btn btn-info"> Reset </button></td>
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

function mapStateToProps(state, ownProps, abc = ownProps.match.params.id) {
  return {
    product: state.customerR.find(emp => {
      return parseInt(emp.UserId, 10) === parseInt(abc, 10);
    })
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);