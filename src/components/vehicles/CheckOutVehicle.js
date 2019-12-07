import React, { useState } from 'react';
import {connect} from 'react-redux';
import {unparkVehicle} from '../../actions';
import RenderVehicle from './RenderVehicle';


const renderSearch = () =>{
    return (
            <div className = "ui search">
                <div className = "ui icon input">
                    <input name = "search-term"className = "prompt" type = "text" placeholder = "Vehicle Number" autoComplete = "off"/>
                    <i className = "search icon"/>
                </div>  
            </div>
    );       
}
const renderVehicleHere = (vehicle) =>{

    if (vehicle.vehicleNumber === ""|| vehicle.vehicleNumber === "No vehicle Found")
        return <div>
            {vehicle.vehicleNumber}
        </div>
    else 
        return (
            <RenderVehicle vehicles = {vehicle}/>            
        );
};

const CheckOutVehicle = (props) => {   

    const [foundVehicle, setFoundVehicle] = useState({
        vehicleType : '',
        vehicleNumber : ''
    });

    const onSearchSubmit = (event) =>{ 
        event.preventDefault();
        const vehicleNumber = new FormData(event.target).get('search-term');
        const vehicle = props.vehicles.filter(vehicle => vehicle.vehicleNumber  === vehicleNumber);
        
        if (typeof vehicle !== 'undefined'){
            setFoundVehicle(vehicle);
        }
        else
            setFoundVehicle({vehicleNumber : "No vehicle Found"})   
    };

    return (
        <div>
            <div className = "ui item">
                <form onSubmit = {onSearchSubmit}>
                    {renderSearch()} 
                </form>
            </div>

            <div className = "ui item">
                {renderVehicleHere(foundVehicle)}
            </div>  
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {vehicles: Object.values(state.vehicles)};
};
export default connect(
    mapStateToProps,
    {unparkVehicle}
)(CheckOutVehicle);