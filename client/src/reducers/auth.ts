import { SET_CURRENT_USER } from '../actions/types';

interface UserState {
  isAuthenticated: boolean;
  user: {} // ??
}

const initialState: UserState = {
  isAuthenticated: false,
  user: {}
}

interface UserAction {
  type: string;
  payload?: any;

}

export const Auth = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload
      }
    default:
      return state
  }
}