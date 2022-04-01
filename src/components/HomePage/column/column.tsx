import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DataRedux } from "../../../interface/interface";
import { ImageComponent } from "../image/image";
import styles from "./column.module.scss";


export const ColumnComponent = () => {

    const data  = useSelector((state:DataRedux) => state);


    useEffect(() => {

    }, [data])

    return  <div className={styles.book__container}>{
            data.DataInfo.data.results.map(item =>
                <div className={styles["sub-book__container"]} key={item.id}>
                    <div className={styles.book__container__description}>
                    <p className={styles["book__container__description"]}>IMAGE</p>
                    <ImageComponent
                        {...{imgLink: item.formats["image/jpeg"], imgAlt: item.title}}
                    />
                    </div>
                    <div className={styles.book__container__description}>
                        <p className={styles["book__container__description"]}>AUTHOR</p>
                        {item.authors.map((author) => {
                            return  <p key={author?.birth_year} className={styles["book__container__author"]}>{author?.name}</p>
                        })}
                    </div>
                    <div className={styles.book__container__description}>
                        <p className={styles["book__container__description"]}>GENRE</p>
                        {item.bookshelves.map((type) => {
                            return  <p key={type} className={styles["book__container__author"]}>{type}</p>
                        })}
                    </div>
                    <div className={styles.book__container__description}>
                        <p className={styles["book__container__description"]}>TITLE</p>
                        <p className={styles["book__container__title"]}>{item.title}</p>
                    </div>
                </div>)
            }</div>

}