import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./Reducers/Reducer";

export const store = createStore(reducer,applyMiddleware(thunk))