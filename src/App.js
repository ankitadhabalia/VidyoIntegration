import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import About from './components/common/about';
import { PrivateRoute } from './PrivateRoute';
import { history } from './_healpers/history';
import login from './components/app/login/login.js';
import register from './components/app/registration/register';
import Customer from './components/app/customer';
import Create from './components/app/customer/create';
import Edit from './components/app/customer/edit';
import Show from './components/app/customer/show';
import Email from './components/app/customer/email';
import VideoCall from './components/app/video/VideoCall';
// import Maps from './components/app/customer/maps';

class App extends Component {
  constructor(props) {
    super(props);
    // const { dispatch } = this.props;
    history.listen((location, action) => {
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <Router history={history}>
          <div>
            <Route exact path='/login' component={login}></Route>
            <Route exact path='/register' component={register}></Route>
            <PrivateRoute exact path="/about" component={About} ></PrivateRoute>
            {/* <Route exact path='/maps' component={Maps}></Route> */}

            <PrivateRoute exact path="/" component={Customer} ></PrivateRoute>
            <PrivateRoute exact path="/create" component={Create} ></PrivateRoute>
            <PrivateRoute exact path='/edit/:id' component={Edit} ></PrivateRoute>
            <PrivateRoute exact path='/VideoCall/:UserId' component={VideoCall} ></PrivateRoute>
            <PrivateRoute exact path='/show/:id' component={Show} ></PrivateRoute>
            <PrivateRoute exact path='/email/:id' component={Email} ></PrivateRoute>

          </div >
        </Router >
      </div>
    );
  }
}

export default App;