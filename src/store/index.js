import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { studentsReducer } from './students/reducer';
import { authReducer } from './auth/reducer';

const rootReducer = combineReducers({
  students: studentsReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
