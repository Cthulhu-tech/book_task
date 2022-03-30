import { PayloadAction } from "@reduxjs/toolkit";

const dafaultValue = {

    data: [],
    load: true

}

const DATA = 'data';
const LOAD = 'load';

export const DataInfo = (state = dafaultValue, action:PayloadAction<boolean>) => {

    switch (action.type) {
        case DATA:
            return {data: action.payload, load: false}
        case LOAD:
            return {data: state.data, load: action.payload}
        default:
            return state;
    }

}

export const DataLoad = (payload:any) => ({type: DATA, payload});
export const LoadState = (payload:boolean) => ({type: LOAD, payload});
