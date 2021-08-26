import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {Auth} from '../reducers/auth';

const rootReducer = combineReducers({
  auth: Auth
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;


