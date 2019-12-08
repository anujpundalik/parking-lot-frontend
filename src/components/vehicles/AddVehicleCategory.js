import React from 'react';
import Form from './Form';
import {addCategory} from '../../actions';
import {connect} from 'react-redux';

const AddVehicleCategory = (props) => {

    const attributes = ["type", "rate"];

    const onSubmit = (formValues) =>{
        props.addCategory(formValues);
    }
    return (
        <div>
            <Form attributes = {attributes} onSubmit = {onSubmit}/>
        </div>
    );
}

export default connect(
    null,
    {addCategory}
)(AddVehicleCategory); 