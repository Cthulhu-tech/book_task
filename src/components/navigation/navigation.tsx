import { CheckAction } from "../../store/reducer/rowOrColimn";
import styles from "./navigation.module.scss";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataRedux } from "../../interface/interface";
import { UploadComponent } from "../upload/upload";

const NavigationComponentMemo = () => {

    const data  = useSelector((state:DataRedux) => state.RowOrColumn.row);
    const dispatch = useDispatch();
    const [row, setRow] = useState(data ? styles.active : "");
    const [column, setColumn] = useState(!data ? styles.active : "");
    const [modal, setModal] = useState(false);

    const RowsState = () => {

        setRow(styles.active);
        setColumn('');
        dispatch(CheckAction(true));

    }

    const ColumnState = () => {

        setRow('');
        setColumn(styles.active);
        dispatch(CheckAction(false));

    }

    const UploadFile = () => {

        return  <section className={styles.upload}>
                    <p className={styles.close} onClick={Upload}>&times;</p>
                    <UploadComponent/>
                </section>

    }

    const Upload = () => setModal(!modal);

    useEffect(() => {

    }, [row, column]);

    return  <nav className={styles.navigation}>
                <div className={styles["navigation__container-representation"]}>
                    <div 
                        className={styles["navigation__image"] + " " + styles.backup} 
                        onClick={Upload} 
                    />
                    <div 
                        className={styles["navigation__image"] + " " + styles.row + " " + row } 
                        onClick={RowsState} 
                    />
                    <div 
                        className={styles["navigation__image"]  + " " + styles.column + " " + column } 
                        onClick={ColumnState} 
                    />
                </div>
                {modal && <UploadFile/>}
            </nav>
}

export const NavigationComponent = memo(NavigationComponentMemo);