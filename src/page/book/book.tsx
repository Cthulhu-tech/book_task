import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { ImageComponent } from "../../components/HomePage/image/image";
import { LoadComponent } from "../../components/load/load";
import { Book, DataRedux } from "../../interface/interface";
import styles from "./book.module.scss";

const BookPageMemo = () => {

    const params = useParams();
    const [load, setLoad] = useState(true);
    const [dataBook, setDataBook] = useState<Book | undefined>();
    const data  = useSelector((state:DataRedux) => state.DataInfo.data);

    const fetchData = () => {
            setLoad(false);
            fetch(`https://gutendex.com/books/?search=${params.name}`)
            .then(data => data.json())
            .then(json => setDataBook(json));
    }

    const searchFromData = new Promise<Book | string>((resolve) => { // check data

        if(Object.keys(data).length > 0){
            for(let i = 0; i < data.results.length; i++)
                if(data.results[i].title === params.name)
                    return resolve({count: 1, next: '', previous: '', results: [data.results[i]]}); // return data store found
        }
            return resolve('not found'); //not found data store
    })

    const search = () => {
        searchFromData
            .then((data) => {
                if(typeof(data) !== 'string'){
                    setDataBook(data);
                }else{
                    if(load)
                        fetchData();
                }  
            })
    }

    useEffect(() => {
        
        if(!dataBook)
            search();

    },[dataBook, params])

    const Data = () => {
        const bookInfo = dataBook?.results[0];
        if(bookInfo)
            return <>
                    <p className={styles.container__paragraph}>
                        {bookInfo?.title}
                    </p>
                        <ImageComponent 
                            {...{imgLink: bookInfo?.formats["image/jpeg"], imgAlt: bookInfo?.title}}
                        />
                    <div className={styles["sub-container"]}>
                        {bookInfo?.bookshelves.map((bookInfo) => {
                            return  <p className={styles.container__paragraph} key={bookInfo}>{bookInfo}</p>
                        })}
                    </div>
                    <div className={styles["sub-container"]}>
                        {bookInfo?.authors.map(author => {
                            return  <div key={author.birth_year}>
                                        <p className={styles.container__paragraph}>
                                            {author?.name}
                                        </p>
                                        <p className={styles.container__paragraph}>
                                            {author?.birth_year}-{author?.death_year ? author.death_year : "..."}
                                        </p>
                                    </div>
                        })}
                    </div>
                    <div className={styles["sub-container"]}>
                        <p className={styles.container__paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quo porro dolorum deserunt, quia quod similique atque, cupiditate ipsa doloribus iusto totam voluptas soluta? Porro tempora pariatur ullam in a.
                            Aspernatur a facere fuga aut blanditiis esse impedit illum officiis suscipit quas quidem eum similique cumque quos, itaque, dolor dolore distinctio perferendis, minus quia? Aspernatur minima eligendi blanditiis quaerat debitis.
                            Temporibus voluptatibus tenetur eum soluta blanditiis dolor expedita sapiente ullam quo nostrum repellat cum, voluptatum, quos est assumenda eveniet. Ipsa ratione placeat totam consequatur unde amet nesciunt! Enim, corrupti porro.
                        </p>
                    </div>
                </>
        
        return <p className={styles.container__paragraph}>ERROR ;(</p>
    }

    return  <section className={styles.container}>
                {dataBook ? <Data/> : <LoadComponent/>}
            </section>

}

export const BookPage = memo(BookPageMemo);