import React from 'react';


const RenderCategories = ({categories}) =>{


    return(
        <table className ="ui celled table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Vehicle Type</th>
                        <th>Rate</th>
                        <th>Levels Allowed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {

                    categories.map( (category,i) => {
            
                        return (
                            <tr key = {i + 1}>
                                <td>
                                    {i + 1}
                                </td>
                                <td data-label ="Vehicle Type">
                                    {category.type}
                                </td>
                                <td data-label ="Rate">
                                    {category.rate}
                                </td>
                                <td data-label ="Levels Allowed">
                                    12:00
                                </td>
                                <td data-label ="Action">
                                    <div>
                                        <button className = "ui button primary" type ="submit" >Edit</button>
                                        <button className = "ui button negative" type ="submit" >Remove</button>
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
export default RenderCategories;