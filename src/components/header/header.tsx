
import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const HeaderComponentMemo = () => {

    return  <header className={styles.header}>
                <Link to="/?page=1" className={styles.header__link}>Bookshelf</Link>
            </header>

}

export const HeaderComponent = memo(HeaderComponentMemo);