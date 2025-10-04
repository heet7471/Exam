import { LOGIN, LOGOUT } from './actions';

const initialState = { user: null, isAuthenticated: false };

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
}
