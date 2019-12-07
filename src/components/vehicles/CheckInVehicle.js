import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { checkInVehicle } from '../../actions';
import {connect} from 'react-redux';

const renderInput = ({ input, label, meta}) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
      <div className={className}>
          <label>{label}</label>
          <input {...input} autoComplete="off"/>
          {renderError(meta)}

      </div>
  );
};
const renderError = ({ error, touched }) => {
  if (touched && error) {
      return (
          <div className="ui error message">
          <div className="header">{error}</div>
          </div>
      );
  }
};

const CheckInVehicle = (props) => {
  
    const onFormSubmit = formValues => {
        props.checkInVehicle(formValues);
    };

    return (
      <form
        onSubmit={props.handleSubmit(onFormSubmit)}
        className="ui form error"
      >
        <Field name="vehicleType" component= {renderInput} label="Enter a vehicle type" />
        <Field
          name="vehicleNumber"
          component={renderInput}
          label="Enter a Vehicle Number"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  
}

const validate = formValues => {
  const errors = {};

  if (!formValues.vehicleType) {
    errors.vehicleType = 'You must enter a vehicle type';
  }

  if (!formValues.vehicleNumber) {
    errors.vehicleNumber = 'You must enter a vehicle number';
  }

  return errors;
};

const formWrapped =  reduxForm({
  form: 'CheckInVehicle',
  validate
})(CheckInVehicle);

export default connect(null, {checkInVehicle})(formWrapped);