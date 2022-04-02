import { useEffect, useRef, useState } from "react";
import styles from "./upload.module.scss";

export const UploadComponent = () => {
    const [filesData, setFilesData] = useState<File[]>();
    const [fileLoad, setLoadFileState] = useState(false);
    const [imageState, setImageState] = useState(false);
    const [image, setImage] = useState<any>([]);
    const refLabel = useRef<HTMLLabelElement>(null);
    const openFile = () => refLabel.current?.click();
    const [infoBook, setInfoBook] = useState({author: "", title: "", description: "", genre: ""})
    const uploadFile = () => {
        let data = new FormData();
        if(infoBook.author !== '' && infoBook.description !== '' && infoBook.genre !== '' && infoBook.title !== '' && filesData){
            filesData.forEach((file) => {
                data.append('file', file);
            });
            data.append('data', JSON.stringify(infoBook));
            fetch('/', {
                method: 'POST',
                body: data
            });
        }
        console.log(data.getAll('file'), data.get('data'));
    }
    const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => setInfoBook({...infoBook, [event.target.name] : event.target.value});
    const handlerTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => setInfoBook({...infoBook, [event.target.name] : event.target.value});
    const changeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
            if(!event.target.files?.length)
                return;
            const files = Array.from(event.target.files);
            setFilesData(files);
            await setLoadFileState(true);
            await setImage(await fileAwait(files));
    }
    const fileAwait = async(files: File[]) => {
        setImageState(true);
        return await Promise.all(files.map( async (file) => {
            if(!file.type.match('image'))
                return;
            const fileContent = await fileReader(file);
            return fileContent;  
        }));
    }
    const fileReader = (file: File) => {
        return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
                fileReader.onerror = reject;
                fileReader.readAsDataURL(file);
            });
    }
    const deleteImage = async (fileName: string, imageBuf: string) => {
        if(filesData){
            await setFilesData(filesData.filter(file => file.name !== fileName));
            await fileAwait(filesData);
            await setImage(image.filter((images: string) => images !== imageBuf));
        }
    }
    const Image = () => {
        return  image.map((image:string, i:number) => 
                <div className={styles["upload__sub-image-container"]} key={i}>
                    <div className={styles["upload__image-times"]}  data-name={filesData && filesData[i]?.name} onClick={() => filesData && deleteImage(filesData[i]?.name, image)}>&times;</div>
                    <img className={styles["upload__image-preview"]} src={image} alt={i.toString()}/>
                </div>)
    }
    useEffect(() => {
        setLoadFileState(false);
        if(filesData && filesData.length > 0 && infoBook.author !== '' && infoBook.description !== '' && infoBook.genre !== '' && infoBook.title !== '' && filesData)
            setLoadFileState(true);
    },[infoBook, refLabel, image, imageState, filesData])
    return  <div className={styles.form}>
                <div className={styles["form-input-container"]}>
                    <input type="text" placeholder="AUTHOR" name="author" onChange={handlerInput} className={styles["form__input-text"]}/>
                    <input type="text" placeholder="TITLE" name="title" onChange={handlerInput} className={styles["form__input-text"]}/>
                    <input type="text" placeholder="GENRE" name="genre" onChange={handlerInput} className={styles["form__input-text"]}/>
                </div>
                <textarea placeholder="DESCRIPTION" className={styles["form__input-description"]} name="description" onChange={handlerTextarea}/>
                    <div className={styles["upload__image-container"]}>
                        {imageState && <Image/>}
                    </div>
                    <label htmlFor="file" ref={refLabel} className={styles["form-input"]}></label>
                        <input type="button" onClick={openFile} className={styles["form-button"]} value="Open"/>
                        <input type="file" onChange={changeHandler} id="file" multiple={true} className={styles["form__input-invisible"]} accept="image/*"/>
                    {fileLoad && <input type="submit" onClick={uploadFile} className={styles["form-button"]} value="Upload"/>}
                </div>
}