import { DataRedux } from "../../interface/interface";
import { Pagenation } from "../../utils/pagenation";
import styles from "./pagenation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FetchData } from "../../store/actionAsync/fetchDataLoadAsync";

const PagenationMemo = () => {

    const data  = useSelector((state:DataRedux) => state);
    const [searchParams, setsearchParams] = useSearchParams();
    const page = Number(searchParams.get("page"));
    const [pageState, setPageState] = useState(Number(searchParams.get("page")));
    const dispatch = useDispatch();

    const dataLoad = () => {
        setPageState(page);
        if(page <= 1){

            setsearchParams({page: "1"});
            dispatch(FetchData({str: 'data', max: 12, page: 1}));

        }else{

            dispatch(FetchData({str: 'data', max: 12, page: page}));

        }
    }


    const PagesButton = () => {
        
        const lastPage = Math.ceil(data.DataInfo.data.count / 32);

        return <div className={styles.pagenation__container}>
        
            {page > 1 && <div 
                            className={styles["pagenation__container-button"]}
                            onClick={() => setsearchParams({page: (page - 1).toString()})}
                        >{"<"}
            </div>}
        {Pagenation(page, lastPage).map((data: string | number, i:number) => {
            return <div 
                        key={i}
                        className={styles["pagenation__container-button"] + ' ' + (Number(data) === page ? styles.active : '')}
                        onClick={() => (!isNaN(Number(data)) && data !== page) && setsearchParams({page: data.toString()})}
                    >{data}</div>
        })}
        {page < lastPage &&  <div 
                            className={styles["pagenation__container-button"]}
                            onClick={() => setsearchParams({page: (page + 1).toString()})}
                        >{">"}
        </div>}
        
        </div>
        

    }

    useEffect(() => {
       
        if(page !== pageState)
            dataLoad();

    }, [searchParams, page, data])

    return  <PagesButton/>
                
}

export const PagenationComponent = memo(PagenationMemo);