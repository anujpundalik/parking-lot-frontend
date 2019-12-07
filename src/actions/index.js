import {
  CHECKIN_VEHICLE,
  CHECKOUT_VEHICLE,
  FETCH_VEHICLE,
  FETCH_VEHICLES,
  UNPARK_VEHICLE,
  ADD_CATEGORY,
  EDIT_CATEGORY 
} from './types';
import ParkedVehicles from '../apis/ParkedVehicles';
import history from '../history';

export const checkInVehicle = (formValues) => async (dispatch) =>{

  const response = await ParkedVehicles.post('/vehicles', {...formValues});

  dispatch ({type : CHECKIN_VEHICLE, payload : response.data});
  history.push('/');
};


export const checkOutVehicle = () =>{

  return {
      type : CHECKOUT_VEHICLE
  };
};

export const fetchVehicle = id => async dispatch => {
  const response = await ParkedVehicles.get(`/vehicles/${id}`);

  dispatch({ type: FETCH_VEHICLE, payload: response.data });
};


export const fetchVehicles = () => async dispatch => {
  const response = await ParkedVehicles.get('/vehicles');

  dispatch({ type: FETCH_VEHICLES, payload: response.data });
};

export const unparkVehicle = () =>{

  return {
      type : UNPARK_VEHICLE
  };
};

export const addCategory = () => {

  return {
    type : ADD_CATEGORY
  };
};

export const editCategory = () => {

  return {
    type : EDIT_CATEGORY
  };
};
