import { DataRedux } from "../../interface/interface";
import { Pagenation } from "../../utils/pagenation";
import styles from "./pagenation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FetchData } from "../../store/actionAsync/fetchDataLoadAsync";

export const PagenationComponent = () => {

    const data  = useSelector((state:DataRedux) => state);
    const [searchParams, setsearchParams] = useSearchParams();
    const page = Number(searchParams.get("page"));
    const dispatch = useDispatch();

    const ButtonClickDataLoader = (number: number | string) => {

        if(number !== page){
            const numberToString = number.toString();
            setsearchParams({page: numberToString});
            if(number <= 1){

                dispatch(FetchData({str: 'data', max: 12, page: 1}));

            }else{

                dispatch(FetchData({str: 'data', max: 12, page: Number(number)}));

            }

        }

    }

    const PagesButton = () => {
        
        return <div className={styles.pagenation__container}>
        {Pagenation(page, Math.ceil(data.DataInfo.data.count / 32)).map((data: string | number, i:number) => {
            return <div 
                        key={i}
                        className={styles["pagenation__container-button"] + ' ' + (Number(data) === page ? styles.active : '')}
                        onClick={() => !isNaN(Number(data)) && ButtonClickDataLoader(data)}
                    >{data}</div>
        })}</div>


    }

    useEffect(() => {

    }, [searchParams, page, data])

    return  <PagesButton/>
                
}