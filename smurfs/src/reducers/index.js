/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILURE,
  DELETING_SMURF_SUCCESS
} from '../actions/index';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = { smurfs: [], fetchingSmurfs: false, addingSmurf: false, error: null };

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      };
    case FETCHING_SMURFS_FAILURE:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      };
    case ADDING_SMURF_FAILURE:
      return {
        ...state,
        error: 'Smurf creation failed.'
      };
    case DELETING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
      };

    default:
      return state;
  }
};

export default rootReducer;
