import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DataRedux } from "../../../interface/interface";
import styles from "../../../style/row.module.scss";
import { ImageComponent } from "../image/image";

export const RowsComponent = () => {

    const data  = useSelector((state:DataRedux) => state);


    useEffect(() => {

        console.log(data.DataInfo)

    }, [data])

    return  <div className={styles.book__container}>{

            data.DataInfo.data.items.map(item =>
            <Link to={"/book?=" + item.volumeInfo.title} key={item.id}>
                <div className={styles["sub-book__container"]}>
                    <ImageComponent 
                        {...{imgLink: item.volumeInfo.imageLinks?.thumbnail, imgAlt: item.volumeInfo.title}}
                    />
                    <p className={styles["book__container__title"]}>{item.volumeInfo.title}</p>
                </div>
            </Link>)
            }</div>

}