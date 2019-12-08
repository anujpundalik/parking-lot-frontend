import React from 'react';
import { Router, Route,Switch} from 'react-router-dom';
import CheckInVehicle from './vehicles/CheckInVehicle';
import CheckOutVehicle from './vehicles/CheckOutVehicle';
import ParkingLevels from './ParkingLevels';
import AddVehicleCategory from './vehicles/AddVehicleCategory';
import ManageVehicleCategories from './vehicles/ManageVehicleCategories';
import history from '../history';
import Header from './Header';
import AllData from './AllData';

const App = () => {

    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={AllData} />
                        <Route path = "/vehicles/checkin" exact component = {CheckInVehicle}/>
                        <Route path = "/vehicles/checkout" exact component = {CheckOutVehicle}/>
                        <Route path = "/parkinglevels" exact component = {ParkingLevels}/>
                        <Route path = "/category/add" exact component = {AddVehicleCategory}/>
                        <Route path = "/category/manage" exact component = {ManageVehicleCategories}/>
                    </Switch>
                </div>
            </Router>
         </div>
    );
};

export default App;

