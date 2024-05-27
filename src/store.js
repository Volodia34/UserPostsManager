import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from "redux-thunk";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
    users: usersReducer(),
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;