import { DataFromFetch } from "../../interface/interface";
import { DataLoad, LoadState } from "../reducer/fetchData";

export const FetchData = (data: DataFromFetch) => {

    const {str, max, page} = data;


    const url = `https://www.googleapis.com/books/v1/volumes?q=${str}&maxResults=${max}&startIndex=${page}`;

    return (dispatch:any) => {
        
        dispatch(LoadState(true));

        fetch(url)
        .then(response => response.json())
        .then(json => dispatch(DataLoad(json)))

    }

}