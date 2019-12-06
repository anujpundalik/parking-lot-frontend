import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import vehicleReducer from './vehicleReducer';

export default combineReducers({
  form: formReducer,
  vehicles : vehicleReducer
});
