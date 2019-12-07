import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { fetchVehicles} from '../../actions';
import RenderVehicle from './RenderVehicle';

const VehicleList = (props) => {

    
    useEffect(
        () => {
            props.fetchVehicles();
        },
        []
    );

    return (
        <div>
            <h2>Vehicles Parked</h2>
            <div className = "ui celled table"> 
                <RenderVehicle vehicles = {props.vehicles} />
            </div>
        </div>
    );
};

const mapStateToProps = state =>{

    return {vehicles : Object.values(state.vehicles)}
};

export default connect(
    mapStateToProps,
    {fetchVehicles}
)(VehicleList)