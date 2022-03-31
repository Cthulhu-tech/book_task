import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DataRedux } from "../../interface/interface";

export const RowsComponent = () => {

    const data  = useSelector((state:DataRedux) => state);

    useEffect(() => {

        console.log(data.DataInfo.data.items)

    }, [data])

    return  <div>{

            data.DataInfo.data.items.map(item =>
                
            <div>
                {item.volumeInfo.title}
            </div>)

            }</div>

}