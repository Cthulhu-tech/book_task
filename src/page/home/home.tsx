import { FetchData } from "../../store/actionAsync/fetchDataLoadAsync";
import { useDispatch, useSelector } from "react-redux";
import { DataRedux } from "../../interface/interface";
import { useCallback, useEffect, useState } from "react";
import { LoadComponent } from "../../components/load/load";
import { RowsComponent } from "../../components/bookPage/row/row";
import { ColumnComponent } from "../../components/bookPage/column/column";

export const HomePage = () => {

    const dispatch = useDispatch();
    const [load, setLoading] = useState(true);
    const data  = useSelector((state:DataRedux) => state);

    const Data = () => data.RowOrColumn.row ? <RowsComponent/> : <ColumnComponent/>

    const DataFetch = () => {

        setLoading(false);
            dispatch(FetchData({str: 'data', max: 10, page: 0}));

    }

    useEffect(() => {

        if(load)
            DataFetch();

    }, [load, data])

    return  <section>
                {data.DataInfo.load ? <LoadComponent/> : <Data/>}
            </section>

}