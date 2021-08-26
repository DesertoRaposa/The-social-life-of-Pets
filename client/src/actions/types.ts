export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export interface User {
  name: string;
  email: string;
  password: string;
  id: string;
}

export interface AuthState {
  isAuthenticated: boolean,
  user: User | null;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export interface SignInData {
  password: string;
  email: string;
}

//Actions 

interface SetUserAction {
  type: typeof SET_CURRENT_USER;
  payload: User;
}

export type AuthAction = SetUserAction;

// export const POST_LOADING = 'POST_LOADING'
// export const ADD_POST = 'ADD_POST'
// export const UPDATE_POST = 'UPDATE_POST'
// export const UPDATE_POSTS = 'UPDATE_POSTS'
// export const GET_POSTS = 'GET_POSTS'
// export const GET_POST = 'GET_POST'
// export const DELETE_POST = 'DELETE_POST'
// export const CLEAR_POSTS = 'CLEAR_POSTS'

// export const SUBSCRIPTION_LOADING = 'SUBSCRIPTION_LOADING'
// export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION'
// export const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS'
// export const DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION'

// export const USER_LOADING = 'USER_LOADING'
// export const GET_USER = 'GET_USER'