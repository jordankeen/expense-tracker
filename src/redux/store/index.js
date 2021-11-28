import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";

// create main reducer with combine reducer
const reducer = combineReducers({
   expenses: expenseReducer,
});

const initialState = {};

// create redux store, pass in reducer and initial state
const store = createStore(reducer, initialState);

export default store;