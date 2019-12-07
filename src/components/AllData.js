import React from 'react';
import VehicleList from './vehicles/VehicleList';
import CheckOutVehicle from './vehicles/CheckOutVehicle';

const AllData = () => {

    return (
        <div>
            <div className = "ui segment">
                <CheckOutVehicle/>
            </div>
            
            <div className = "ui segment">
                <VehicleList/>
            </div>
        </div>
    );
}

export default AllData;