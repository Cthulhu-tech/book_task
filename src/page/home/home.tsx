import { FetchData } from "../../store/actionAsync/fetchDataLoadAsync";
import { useDispatch, useSelector } from "react-redux";
import { DataRedux } from "../../interface/interface";
import { useCallback, useEffect, useState } from "react";
import { LoadComponent } from "../../components/load/load";

export const HomePage = () => {

    const dispatch = useDispatch();
    const [load, setLoading] = useState(true);
    const data  = useSelector((state:DataRedux) => state);

    const Row = useCallback(() => {
        return  <div>{

                data.DataInfo.data.items.map(item =>
                    
                <div>
                    {item.volumeInfo.title}
                </div>)

                }</div>

    },[data.DataInfo])

    const Column = useCallback(() => {

        return <>column</>

    },[data.DataInfo])


    const Data = () => data.RowOrColumn.row ? <Row/> : <Column/>

    const DataFetch = () => {

        setLoading(false);
            dispatch(FetchData({str: 'data', max: 10, page: 0}));

    }

    useEffect(() => {

        if(load)
            DataFetch();

        console.log(data.DataInfo.data.items[0].volumeInfo.title)
    }, [load, data])

    return  <section>
                {data.DataInfo.load ? <LoadComponent/> : <Data/>}
            </section>

}