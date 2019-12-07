import { CHECKIN_VEHICLE, CHECKOUT_VEHICLE, FETCH_VEHICLE, FETCH_VEHICLES, UNPARK_VEHICLE, ADD_CATEGORY, EDIT_CATEGORY } from '../actions/types';
import _ from 'lodash';
export default (state = {}, action) =>{
    switch (action.type){
        case CHECKIN_VEHICLE:
            return { ...state, [action.payload.id] : action.payload};
        case CHECKOUT_VEHICLE:
            return "checkout";
        case FETCH_VEHICLE:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_VEHICLES:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case UNPARK_VEHICLE:
            return "unparkVehicle";
        case ADD_CATEGORY:
            return "add category";
        case EDIT_CATEGORY:
            return "edit category";
        default:
            return state;
    }
};

