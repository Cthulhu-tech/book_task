
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const HeaderComponent = () => {

    return  <header className={styles.header}>
                <Link to="/" className={styles.header__link}>Bookshelf</Link>
            </header>

}