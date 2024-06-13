import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from "redux-thunk";
import usersReducer from "./reducers/usersReducer";
import postsReducer from "./reducers/postsReducer";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    post: postReducer,
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;