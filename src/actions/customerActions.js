import * as types from './actionTypes';
import axios from 'axios';
import { history } from '../_healpers/history';

const apiUrl = 'http://localhost:62092/api';

export function listAllCustomersSuccess(products) {
  return {
    type: types.LIST_ALL_CUSTOMERS_SUCCESS,
    payload: products
  };
}

export function deleteCustomerSuccess(msg) {
  return {
    type: types.DELETE_CUSTOMER_SUCCESS,
    payload: msg
  }
}

export function editCustomerSuccess(msg) {
  return {
    type: types.EDIT_CUSTOMER_SUCCESS,
    payload: msg
  }
}

export function addCustomerSuccess(msg) {
  return {
    type: types.ADD_CUSTOMER_SUCCESS,
    payload: msg
  }
}

export function fetchAllCustomers(num) {
  debugger;
  return function (dispatch) {
    return axios
      .get('http://localhost:62092/api/Default?&pageNumber=' + num + '&pageSize=5')
      .then(response => {
        dispatch(listAllCustomersSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addCustomer(formData) {
  return function (dispatch) {
    debugger;
    return axios
      .post('http://localhost:62092/api/Default', formData)
      .then(response => {
        dispatch(addCustomerSuccess(response.data));
        history.push('/');
      })
      .catch(error => {
        throw error;
      });
  };
}


export function editCustomer(editData) {
  return function (dispatch) {
    return axios
      .put('http://localhost:62092/api/Default', editData)
      .then(response => {
        dispatch(editCustomerSuccess(response.data));
        this.history.push('/');
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteCustomer(customerId) {
  return function (dispatch, getState) {
    return axios.delete(`${apiUrl}/Default/${customerId}`).then(response => {
      dispatch(deleteCustomerSuccess(response));
    })
  }
}

export function search(data) {
  return function (dispatch) {

    return axios.get(`http://localhost:62092/api/Default?QuerySearch=${data}`)
      .then(response => {
        dispatch(listAllCustomersSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addEmail(formData) {
  debugger;
  return function (dispatch) {
    debugger;
    return axios
      .post('http://localhost:62092/api/Email/sendEmailViaWebApi', formData)
      .then(response => {
        dispatch(addCustomerSuccess(response.data));
        history.push('/');
      })
      .catch(error => {
        throw error;
      });
  };
}
