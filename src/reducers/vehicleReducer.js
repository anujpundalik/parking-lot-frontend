import { CHECKIN_VEHICLE, CHECKOUT_VEHICLE, FETCH_VEHICLE, FETCH_VEHICLES} from '../actions/types';
import _ from 'lodash';
export default (state = {}, action) =>{
    switch (action.type){
        case CHECKIN_VEHICLE:
            return { ...state, [action.payload.id] : action.payload};
        case CHECKOUT_VEHICLE:
            return _.omit(state, action.payload);    
        case FETCH_VEHICLE:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_VEHICLES:
            return { ...state, ..._.mapKeys(action.payload, 'id') };        
        default:
            return state;
    }
};

