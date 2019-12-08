import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { fetchCategories} from '../../actions';
import RenderCategories from './RenderCategories';

const ManageVehicleCategories = ({fetchCategories, categories}) => {

    useEffect(() => {
            fetchCategories();
        },[]);
    
    return (
        <div>
            <h2>Vehicles Categories</h2>
            <div className = "ui celled table"> 
                <RenderCategories categories = {categories} />
            </div>
        </div>
    );
};

const mapStateToProps = state =>{

    return {categories : Object.values(state.categories)}
};

export default connect(
    mapStateToProps,
    {fetchCategories}
)(ManageVehicleCategories);