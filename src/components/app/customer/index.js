import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import * as customerActions from '../../../actions/customerActions';
import Header from '../../common/header';
import moment from 'moment';
import Pagination from './../../common/pagination';

class Customer extends Component {
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
      pageOfItems: [],
      redirectToEdit: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.myFunction = this.myFunction.bind(this);
    this.typeHead = this.typeHead.bind(this);             //for search text
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  handleDelete(customerId) {
    this.props.actions.deleteCustomer(customerId)
      .then(response => {
        this.props.actions.fetchAllCustomers();
      });
  }

  // update state with new page of items
  // onChangePage(pageOfItems) {
    // this.setState({ pageOfItems: pageOfItems });
  // }

  //searching by typehead
  typeHead(e) {
    e.preventDefault();
    this.props.actions.search(e.target.value);
  }

  page(num) {
    this.props.actions.fetchAllCustomers(num);
  }

  //searching by name and displaying on particular page 
  myFunction() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  render() {
    const allCustomers = this.props.products
    return (
      <div>
        <Header />
        <datalist Id="customerName" >
          {allCustomers.map(cus => {
            return (
              <option value={cus.First_Name} />
            )
          })}
          {this.state.pageOfItems.map(item =>
            <div key={item.UserId}>{item.First_Name}</div>
          )}
        </datalist >

        <div className="form-group">
          <div className="row">
            <table className="table">
              <tr>
                <td> <NavLink to="/create" className="btn btn-info col-md-5" onClick={refreshPage} > Add Record </NavLink> </td>
                <td>
                  <div class="col-md-12">
                    <input type="text" className="form-control" id="myInput" name="First_Name"
                      list="customerName" onBlur={this.typeHead} placeholder="Enter Your First Name" />
                  </div>
                </td>
                <td> <button className="btn btn-info" onClick={this.myFunction}> Search </button> </td>
              </tr>
            </table>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Mail</th>
              <th>Phone</th>
              <th>Status</th>
              {/* <th>Address</th> */}
              <th>Country</th>
              <th>Region</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="myTable">

            {this.state.pageOfItems.map(customer => {
              return (
                <tr> <td>{customer.UserId}</td>
                  <td>{customer.First_Name}</td>
                  <td>{customer.DateOfBirth}</td>
                  <td>{customer.Mail}</td>
                  <td>{customer.Phone}</td>
                  <td>{customer.Marital_Status}</td>
                  {/* <td>{customer.Address}</td> */}
                  <td>{customer.country}</td>
                  <td>{customer.region}</td>
                  <td>

                    <NavLink class="fa fa-edit col-md-2" title="Edit" to={`/edit/${customer.UserId}`} style={{ cursor: 'pointer', color: '#000000' }} ></NavLink> {' '}{' '}

                    <i class="fa fa-trash col-md-2" title="Delete" style={{ cursor: 'pointer' }} onClick={() => this.handleDelete(customer.UserId)}> </i>{' '}

                    <NavLink class="fa fa-phone col-md-2" title="Video Call" to={`/VideoCall/${customer.UserId}`} style={{ cursor: 'pointer', color: '#000000' }} > </NavLink>

                    <NavLink class="fa fa-eye col-md-2" title="View Details" to={`/show/${customer.UserId}`} style={{ cursor: 'pointer', color: '#000000' }} > </NavLink>

                    <NavLink class="fa fa-envelope col-md-2" title="Send Email" to={`/email/${customer.UserId}`} style={{ cursor: 'pointer', color: '#000000' }} > </NavLink>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination items={allCustomers} onChangePage={this.onChangePage} />
        {/* <div>
          <ul className="pagination">
            <li class="page-item"><button class="page-link" href="#" onClick={this.page.bind(this, 5)}>Previous</button></li>
            <li className="page-item"><button className="page-link" onClick={this.page.bind(this, 1)}>1</button></li>
            <li className="page-item"><button className="page-link" onClick={this.page.bind(this, 2)}>2</button></li>
            <li className="page-item"><button className="page-link" onClick={this.page.bind(this, 3)}>3</button></li>
            <li className="page-item"><button className="page-link" onClick={this.page.bind(this, 4)}>4</button></li>
            <li className="page-item"><button className="page-link" onClick={this.page.bind(this, 5)}>5</button></li>
            <li class="page-item"><button class="page-link" href="#" onClick={this.page.bind(this, 5)}>Next</button></li>
          </ul>
        </div> */}

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.customerR
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

function refreshPage() {
  window.location.reload();
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);