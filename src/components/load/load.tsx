import styles from "./load.module.scss";

export const LoadComponent = () => {

    return  <div className={styles.animation}>
                <div className={styles.animation__line} />
                <div className={styles.animation__line} />
                <div className={styles.animation__line} />
                <div className={styles.animation__line} />
                <div className={styles.animation__line} />
            </div>
}