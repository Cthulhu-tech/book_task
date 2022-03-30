import { PayloadAction } from "@reduxjs/toolkit";

const dafaultValue = {

    row: false

}

const ROW_OR_COLUMN_CHECK = 'chekRowOrColumn';

export const RowOrColumn = (state = dafaultValue, action:PayloadAction<boolean>) => {

    switch (action.type) {
        case ROW_OR_COLUMN_CHECK:
            return {row: action.payload}
        default:
            return state;
    }

}

export const CheckAction = (payload:boolean) => ({type: ROW_OR_COLUMN_CHECK, payload});
