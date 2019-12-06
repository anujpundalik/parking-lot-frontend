import {
  CHECKIN_VEHICLE,
  CHECKOUT_VEHICLE,
  FETCH_VEHICLE,
  FETCH_VEHICLES,
  UNPARK_VEHICLE,
  ADD_CATEGORY,
  EDIT_CATEGORY 
} from './types';


export const checkInVehicle = () =>{

  return {
      type : CHECKIN_VEHICLE
  };
};


export const checkOutVehicle = () =>{

  return {
      type : CHECKOUT_VEHICLE
  };
};


export const fetchVehicle = () =>{

  return {
      type : FETCH_VEHICLE
  };
};


export const fetchVehicles = () =>{

  return {
      type : FETCH_VEHICLES
  };
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
