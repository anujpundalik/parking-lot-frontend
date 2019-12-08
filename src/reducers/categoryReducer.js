import {ADD_CATEGORY, EDIT_CATEGORY,FETCH_CATEGORIES} from '../actions/types';
import _ from 'lodash';
export default (state = {}, action) => {

    switch (action.type){
        case ADD_CATEGORY:
            return { ...state, [action.payload.id] : action.payload};
        case EDIT_CATEGORY:
            return "edit category";
        case FETCH_CATEGORIES:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;    
    }
};