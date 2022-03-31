import { useEffect, useState } from "react";
import styles from "../../../style/row.module.scss";

export const ImageComponent = (data: {imgLink:string | undefined, imgAlt:string}) => {

    const [load, setLoad] = useState(true);

    const Image = () => (<img 
                        className={styles["book__container__image"]}
                        src={data.imgLink} 
                        alt={data.imgAlt}
                        onLoad={() => setLoad(false)}
                        />)

    const Load = () => <>load...</>

    useEffect(() => {
        console.log(load)
    }, [load])

    return  load ? <Load/> : <Image/>

}