import React from 'react';
import { Field, reduxForm } from 'redux-form';

const globalAttributes = []

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

const renderForm = (attributes) => {
  
  const fields = [];
  for (let i = 0; i < attributes.length; i++){
    
    fields.push(<Field name= {attributes[i]} component= {renderInput} label= {`Enter a ${attributes[i]}`} key = {i}/>)
    globalAttributes.push(attributes[i]);
  }
  return (
    <div>
      {fields}    
    </div>
  );
}

const Form = (props) => {
  
    const onFormSubmit = formValues => {
        props.onSubmit(formValues);
    };

    return (
      <form
        onSubmit={props.handleSubmit(onFormSubmit)}
        className="ui form error"
      >
        {renderForm(props.attributes)}
        <button className="ui button primary">Submit</button>
      </form>
    );
  
}

const validate = formValues => {
  const errors = {};

  if (!formValues.category) {
    errors.category = 'You must enter a category';
  }

  if (!formValues.rates) {
    errors.rates = 'You must enter a rate';
  }

  return errors;
};

export default reduxForm({
  form: 'Form',
  validate
})(Form);
