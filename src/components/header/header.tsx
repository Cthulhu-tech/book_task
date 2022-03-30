import styles from "../../style/header.module.scss";

export const HeaderComponent = () => {

    return  <header className={styles.header}>
                <div className={styles["header__image-container"]}>
                    <img src="logo.png" alt="logo__book.png" className={styles.header__image}/>
                </div>
            </header>

}