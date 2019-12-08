import {
  CHECKIN_VEHICLE,
  CHECKOUT_VEHICLE,
  FETCH_VEHICLE,
  FETCH_VEHICLES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  FETCH_CATEGORIES 
} from './types';
import ParkingLot from '../apis/ParkingLot';
import history from '../history';

export const checkInVehicle = (formValues) => async (dispatch) =>{

  const response = await ParkingLot.post('/vehicles', {...formValues});

  dispatch ({type : CHECKIN_VEHICLE, payload : response.data});
  history.push('/');
};

export const checkOutVehicle = id => async dispatch =>{

  await ParkingLot.delete(`/vehicles/${id}`);

  dispatch({ type: CHECKOUT_VEHICLE, payload: id });
};

export const fetchVehicle = id => async dispatch => {
  const response = await ParkingLot.get(`/vehicles/${id}`);

  dispatch({ type: FETCH_VEHICLE, payload: response.data });
};


export const fetchVehicles = () => async dispatch => {
  const response = await ParkingLot.get('/vehicles');

  dispatch({ type: FETCH_VEHICLES, payload: response.data });
};

export const addCategory = (formValues) => async dispatch => {

  const response = await ParkingLot.post('/category', {...formValues});
  
  dispatch({type : ADD_CATEGORY, payload: response.data});
  history.push('/category/manage');
};

export const editCategory = () => {

  return {
    type : EDIT_CATEGORY
  };
};

export const fetchCategories = () => async dispatch => {
  const response = await ParkingLot.get('/category');

  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};