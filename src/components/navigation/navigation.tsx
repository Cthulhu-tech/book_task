import { CheckAction } from "../../store/reducer/reducer";
import styles from "../../style/navigation.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const NavigationComponent = () => {

    const dispatch = useDispatch();
    const [row, setRow] = useState('');
    const [column, setColumn] = useState(styles.active);

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

    useEffect(() => {

    }, [row, column]);

    return  <nav className={styles.navigation}>
                <div className={styles["navigation__container-representation"]}>
                    <div 
                        className={styles["navigation__image"] + ' ' + styles.row + ' ' + row } 
                        onClick={RowsState} 
                    />
                    <div 
                        className={styles["navigation__image"]  + ' ' + styles.column + ' ' + column } 
                        onClick={ColumnState} 
                    />
                </div>
            </nav>

}