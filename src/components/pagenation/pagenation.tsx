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
        
        const lastPage = Math.ceil(data.DataInfo.data.count / 32);
        console.log(page,lastPage)
        return <div className={styles.pagenation__container}>
        
            {page > 1 && <div 
                            className={styles["pagenation__container-button"]}
                            onClick={() => ButtonClickDataLoader(page - 1)}
                        >{"<"}
            </div>}
        {Pagenation(page, lastPage).map((data: string | number, i:number) => {
            return <div 
                        key={i}
                        className={styles["pagenation__container-button"] + ' ' + (Number(data) === page ? styles.active : '')}
                        onClick={() => !isNaN(Number(data)) && ButtonClickDataLoader(data)}
                    >{data}</div>
        })}
        {page < lastPage &&  <div 
                            className={styles["pagenation__container-button"]}
                            onClick={() => ButtonClickDataLoader(page + 1)}
                        >{">"}
        </div>}
        
        </div>
        

    }

    useEffect(() => {

    }, [searchParams, page, data])

    return  <PagesButton/>
                
}