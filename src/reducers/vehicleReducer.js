import { CHECKIN_VEHICLE, CHECKOUT_VEHICLE, FETCH_VEHICLE, FETCH_VEHICLES, UNPARK_VEHICLE, ADD_CATEGORY, EDIT_CATEGORY } from '../actions/types';

export default (state = {}, action) =>{
    switch (action.type){
        case CHECKIN_VEHICLE:
            return "create ticket";
        case CHECKOUT_VEHICLE:
            return "checkout";
        case FETCH_VEHICLE:
            return "fetch vehicle";
        case FETCH_VEHICLES:
            return "fetch vehicles";
        case UNPARK_VEHICLE:
            return "unparkVehicle";
        case ADD_CATEGORY:
            return "add category";
        case EDIT_CATEGORY:
            return "edit category";
        default:
            return "default String";
    }
};

