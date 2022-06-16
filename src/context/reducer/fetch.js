import { ACTIONS } from "../actions/fetch";

export const initialState = {
  loading: true,
  error: false,
  data: {},
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {
        loading: false,
        error: false,
        data: {
          info: action.payload.info,
          results: action.payload.results,
        },
      };
    default:
      return state;
  }
};
