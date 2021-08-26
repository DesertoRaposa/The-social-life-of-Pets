import {
  AuthAction,
  AuthState,
  SET_CURRENT_USER
} from '../actions/types';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null
}

export const Auth = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload
      }
    default:
      return state;
  }
}

