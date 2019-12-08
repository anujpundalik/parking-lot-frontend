import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { fetchVehicles} from '../../actions';
import RenderVehicle from './RenderVehicle';

const VehicleList = ({fetchVehicles, vehicles}) => {
    
    useEffect(() => {
            fetchVehicles();
        },[]);
    
    console.log("here")
    return (
        <div>
            <h2>Vehicles Parked</h2>
            <div className = "ui celled table"> 
                <RenderVehicle vehicles = {vehicles} />
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