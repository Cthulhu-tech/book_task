import { DataFromFetch } from "../../interface/interface";
import { DataLoad, LoadState } from "../reducer/fetchData";

export const FetchData = (data: DataFromFetch) => {

    const {page} = data;

    const url = `https://gutendex.com/books/?page=${page}`;

    return (dispatch:any) => {
        
        dispatch(LoadState(true));

        fetch(url)
        .then(response => response.json())
        .then(json => dispatch(DataLoad(json)))

    }

}