import { createStore, combineReducers } from "redux";
import courseReducer from "./reducers/courseReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({
    courses: courseReducer,
})

export const store = createStore(combinedReducer, composeWithDevTools())