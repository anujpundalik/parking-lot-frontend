import React from 'react';


const RenderVehicle = ({vehicles}) =>{


    return(
        <table className ="ui celled table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Vehicle Number</th>
                        <th>Vehicle Type</th>
                        <th>Check IN</th>
                        <th>Level</th>
                        <th>Section</th>
                        <th>Spot</th>
                        <th>Total Time</th>
                        <th>Total Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    vehicles.map( (vehicle,i) => {
                        return (
                            <tr key = {i + 1}>
                                <td>
                                    {i + 1}
                                </td>
                                <td data-label ="Vehicle Number">
                                    {vehicle.vehicleNumber}
                                </td>
                                <td data-label ="Vehicle Type">
                                    {vehicle.vehicleType}
                                </td>
                                <td data-label ="Check IN">
                                    12:00
                                </td>
                                <td data-label ="Level">
                                    3
                                </td>
                                <td data-label ="Section">
                                    2
                                </td>
                                <td data-label ="Spot">
                                    1
                                </td>
                                <td data-label ="Total Time">
                                    00:45:00
                                </td>
                                <td data-label ="Total Amount">
                                    20
                                </td>
                                <td data-label ="Action">
                                    <div>
                                        <button className = "ui button primary" type ="submit" >Checkout</button>
                                    </div>
                                </td>
                            </tr>      
                        );
                    })
                  }                    
                </tbody>
            </table>
    );

};
export default RenderVehicle;