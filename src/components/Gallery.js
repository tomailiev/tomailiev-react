import { Container } from "react-bootstrap"
import { useContext, useEffect, useState } from "react";
import { getItems } from "../utils/firebaseDB";
import { getLink } from "../utils/firebaseStorage";
import LoadingContext from "../context/loadingContext";
import Spacer from "./Spacer";
import NotificationContext from "../context/notificationContext";
import LanguageContext from "../context/languageContext";
import ImageCarousel from "./ImageCarousel";

const Gallery = () => {

    const { isLoading, setIsLoading } = useContext(LoadingContext);
    const { setNotification } = useContext(NotificationContext);
    const { language: { titles, messages } } = useContext(LanguageContext);
    const [images, setImages] = useState(null);
    const [caps, setCaps] = useState([]);


    useEffect(() => {
        setIsLoading(true);
        getItems('images')
            .then(docs => {
                setCaps(docs.map(x => x.caption));
                return Promise.allSettled(docs.map(({ imageUrl }) => getLink(imageUrl.replace('https://tomailiev.com/pics', 'images'))));
            })
            .then(pics => {
                setImages(pics
                    .filter((x, i) => {
                        if (!x.value) {
                            setCaps(prev => prev.filter((_x, j) => j !== i));
                        }
                        return !!x.value;
                    })
                    .map(x => x.value));
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err.code);
                setNotification({ type: 'warning', message: messages.warning });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setIsLoading, setNotification]);

    return (
        <Container fluid className="py-2 px-0">
            <Spacer height={5} />
            <h1>{titles.photos}</h1>
            <Container fluid className="bg-dark px-0 vh-100">
                {!!images && !isLoading && (
                    <ImageCarousel images={images} caps={caps} />
                )}
            </Container>
            <Spacer height={5} />
        </Container >
    );
};

export default Gallery;