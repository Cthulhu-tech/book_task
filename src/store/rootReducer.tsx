import { combineReducers, createStore } from "redux";
import { RowOrColumn } from "./reducer/reducer";


export const store = createStore(combineReducers({
    RowOrColumn,
}));