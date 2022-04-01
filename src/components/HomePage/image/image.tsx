import { memo, useEffect, useState } from "react";
import styles from "../row/row.module.scss";

const ImageComponentMemo = (data: {imgLink:string | undefined, imgAlt:string}) => {

    const [load, setLoad] = useState(false);

    useEffect(() => {

    }, [load])

    return  <>
                {!load && <div className={styles["book__container__image-loader"]} />}
                <img 
                    style={load ? {} : {display: 'none'}}
                    className={styles["book__container__image"]}
                    src={data.imgLink} 
                    alt={data.imgAlt}
                    onLoad={() => setLoad(true)}
                />
            </>
}

export const ImageComponent = memo(ImageComponentMemo);