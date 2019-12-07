import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className ="ui massive secondary pointing menu">
            <Link to = "/" className ="active item">
                Home
            </Link>

            <div className ="right menu">
                <Link to = "/vehicles/checkin" className = "item"> Checkin Vehicle </Link>
                
                <Link to = "/parkinglevels" className = "item"> All Parking Levels </Link>
        
                <div className ="ui simple dropdown item">
                    Vehicle Category <i className="dropdown icon"></i>           
                    <div className="menu">
                        <Link to = "/vehicles/addCategory" className = "item">Add Category</Link>
                        <Link to = "/vehicles/manageCategory" className = "item">Manage Category</Link>
                    </div>
                </div>
                <div className="item">
                    <div className ="ui primary button"> Logout </div>
                </div>
            </div>
        </div>
    );
};

export default Header;