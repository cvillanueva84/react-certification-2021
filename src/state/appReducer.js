import { types } from '../types/types';

// eslint-disable-next-line no-unused-vars
export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };

    case types.changeSearchQuery:
      return {
        ...state,
        search: action.payload,
      };

    default:
      break;
  }
};
