import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DataRedux } from "../../../interface/interface";
import styles from "./row.module.scss";
import { ImageComponent } from "../image/image";

const RowsComponentMemo = () => {

    const data  = useSelector((state:DataRedux) => state);


    useEffect(() => {

    }, [data])

    return  <div className={styles.book__container}>{

            data.DataInfo.data.results.map(item =>
            <Link to={"/book/" + item.title} key={item.id}>
                <div className={styles["sub-book__container"]}>
                    <ImageComponent 
                        {...{imgLink: item.formats["image/jpeg"], imgAlt: item.title}}
                    />
                    {item.authors.map((author) => {
                        return  <p key={author?.birth_year} className={styles["book__container__author"]}>{author?.name}</p>
                    })}
                    <p className={styles["book__container__title"]}>{item.title}</p>
                </div>
            </Link>)
            }</div>

}

export const RowsComponent = memo(RowsComponentMemo);