import React, { Component } from 'react';
import axios from 'axios';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    debugger;
    axios.get('http://localhost:62092/api/Default/' + this.props.match.params.id)
      .then(res => {
        this.setState({ product: res.data });
        console.log(this.state.product);
      });

    // debugger;
    // axios.get('http://localhost:62092/api/Upload/'+this.props.match.params.id)
    //   .then(res => {
    //     this.setState({ product: res.data });
    //     console.log(this.state.product);
    //   });
  }

  Back = () => {
    this.props.history.push("/")
  }

  render() {
    console.log("props", this.props)
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading"><br />
            <h3 class="panel-title">
              Employee Details
            </h3>
          </div><br />
          <div class="panel-body">
            <table className="table">
              <tbody>
                <dl>

                  {/* <div class="row"> <dt> Image : </dt>
                      <dd>{this.state.product.data}</dd>
                        </div> */}

                  <tr>
                    <td><dt> Name : </dt></td>
                    <td><dd>{this.state.product.First_Name}</dd></td>
                  </tr>
                  <tr>
                    <td><dt> Date Of Birth : </dt></td>
                    <td><dd>{this.state.product.DateOfBirth}</dd></td>
                  </tr>

                  <tr>
                    <td><dt> Phone : </dt></td>
                    <td><dd>{this.state.product.Phone}</dd></td>
                  </tr>

                  <tr>
                    <td><dt> Mail : </dt></td>
                    <td><dd>{this.state.product.Mail}</dd></td>
                  </tr>

                  <tr>
                    <td><dt> Job Status : </dt></td>
                    <td><dd>{this.state.product.Marital_Status}</dd></td>
                  </tr>

                  <tr>
                    <td><dt> Address : </dt></td>
                    <td><dd>{this.state.product.Address}</dd></td>
                  </tr>

                  <tr>
                    <td><dt> Country : </dt></td>
                    <td><dd>{this.state.product.country}</dd></td>
                  </tr>
                  <tr>
                    <td><dt> Region : </dt></td>
                    <td><dd>{this.state.product.region}</dd></td>
                  </tr>

                </dl>
              </tbody>
            </table>

          </div>
        </div> <br />
        <button onClick={this.Back} class="btn btn-primary">Back To List</button>
      </div >

    );
  }
}
export default Show;