import { createStore } from "@reduxjs/toolkit";
import loginModal from "./reducers/loginModal";
import user from "./reducers/user";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  combineReducers({
    loginModal,
    user,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
