// import React, { Component } from 'react';

// class RadioButton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Marital_Status: ''
//         }
//         this.handleChange_Marital_Status = this.handleChange_Marital_Status.bind(this); //for radio buttons change
//         this.handleSubmit_Marital_Status = this.handleSubmit_Marital_Status.bind(this); //for radio buttons submit

//     }
//     //for radio button change
//     handleChange_Marital_Status(event) {
//         debugger;
//         this.setState({
//             Marital_Status: event.target.value
//         });
//     }

  

//     render() {
//         return (
//             <div>
//                 <label>
//                     <input
//                         type="radio"
//                         value="Developer"
//                         checked={this.state.Marital_Status === "Developer"}
//                         onChange={this.handleChange_Marital_Status}
//                     />
//                     Developer
//                 </label> {" "}

//                 <label>
//                     <input
//                         type="radio"
//                         value="Tester"
//                         checked={this.state.Marital_Status === "Tester"}
//                         onChange={this.handleChange_Marital_Status}
//                     />
//                     Tester
//                                                     </label>{" "}
//                 <label>
//                     <input
//                         type="radio"
//                         value="Database Administrator"
//                         checked={this.state.Marital_Status === "Database Administrator"}
//                         onChange={this.handleChange_Marital_Status}
//                     />
//                     DBA

//                                                     </label>{" "}
//                 <label>
//                     <input
//                         type="radio"
//                         value="Networking"
//                         checked={this.state.Marital_Status === "Networking"}
//                         onChange={this.handleChange_Marital_Status}
//                     />
//                     Networking
//                                                     </label>{" "}

//             </div>
//         );
//     }
// }
// export default RadioButton;