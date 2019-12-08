import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import vehicleReducer from './vehicleReducer';
import categoryReducer from './categoryReducer';
export default combineReducers({
  form: formReducer,
  vehicles : vehicleReducer,
  categories: categoryReducer
});
