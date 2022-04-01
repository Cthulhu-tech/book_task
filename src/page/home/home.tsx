import { FetchData } from "../../store/actionAsync/fetchDataLoadAsync";
import { useDispatch, useSelector } from "react-redux";
import { DataRedux } from "../../interface/interface";
import { useEffect, useState } from "react";
import { LoadComponent } from "../../components/load/load";
import { RowsComponent } from "../../components/HomePage/row/row";
import { ColumnComponent } from "../../components/HomePage/column/column";
import { PagenationComponent } from "../../components/pagenation/pagenation";
import { useSearchParams } from "react-router-dom";

export const HomePage = () => {

    const dispatch = useDispatch();
    const [load, setLoading] = useState(true);
    const [searchParams, setsearchParams] = useSearchParams();
    const page = Number(searchParams.get("page"));
    const data  = useSelector((state:DataRedux) => state);

    const Data = () => data.RowOrColumn.row ? <RowsComponent/> : <ColumnComponent/>

    const DataFetch = () => {
        setLoading(false);
        if(page <= 1){

            setsearchParams({page: "1"});
            dispatch(FetchData({str: 'data', max: 12, page: 1}));

        }else{

            dispatch(FetchData({str: 'data', max: 12, page: page}));

        }
    }

    useEffect(() => {

        if(load)
            DataFetch();

    }, [searchParams, page, data])

    return  <>
                {data.DataInfo.load ?  <LoadComponent/> : <Data/>  }
                {(data.DataInfo.data.next || data.DataInfo.data.previous) && <PagenationComponent/>}
            </>

}