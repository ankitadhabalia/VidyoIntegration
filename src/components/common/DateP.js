import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class DateP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DateOfBirth: moment(),
        }
        this.handleChange_Date = this.handleChange_Date.bind(this); //for date change

    }
    handleChange_Date(date) {
        this.setState({
            DateOfBirth: date,
        });
    }

    render() {
        return (
            <div>
                <DatePicker
                    className="form-control"
                    selected={this.state.DateOfBirth}
                    onChange={this.handleChange_Date}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    minDate={moment().subtract(100, "year")}
                    maxDate={moment()}
                    name="DateOfBirth"
                    required="required"
                />
            </div>
        );
    }
}
export default DateP;