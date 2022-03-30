import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { RowOrColumn } from "./reducer/rowOrColimn";
import { DataInfo } from "./reducer/fetchData";
import thunk from "redux-thunk";


export const store = createStore(combineReducers({
    RowOrColumn,
    DataInfo,
}), 
composeWithDevTools(
    applyMiddleware(thunk)
));