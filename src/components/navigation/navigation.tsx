import { CheckAction } from "../../store/reducer/rowOrColimn";
import styles from "./navigation.module.scss";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataRedux } from "../../interface/interface";
import { useNavigate } from "react-router-dom";

const NavigationComponentMemo = () => {

    const data  = useSelector((state:DataRedux) => state.RowOrColumn.row);
    const dispatch = useDispatch();
    const [row, setRow] = useState(data ? styles.active : "");
    const [column, setColumn] = useState(!data ? styles.active : "");
    const navigate = useNavigate();

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

    const Upload = () => {

        navigate("/upload");

    }

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
            </nav>
}

export const NavigationComponent = memo(NavigationComponentMemo);