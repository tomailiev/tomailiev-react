import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import LanguageContext from "../context/languageContext";
import LoadingContext from "../context/loadingContext";
import NotificationContext from "../context/notificationContext";
import { getItems } from "../utils/firebaseDB";
import Iframe from "./Iframe";
import Spacer from "./Spacer";

const Media = () => {

    const { isLoading, setIsLoading } = useContext(LoadingContext);
    const { setNotification } = useContext(NotificationContext);
    const { language: { titles, negatives, messages } } = useContext(LanguageContext);
    const [mediaItems, setMediaItems] = useState(null);
    const { pathname } = useLocation();
    const mediaType = pathname.substring(1);


    useEffect(() => {
        setIsLoading(true)
        getItems(mediaType, null, 10, ['featured', 'desc'])
            .then(items => {
                setIsLoading(false);
                setMediaItems(items);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err.code);
                setNotification({ type: 'warning', message: messages.warning });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mediaType, setIsLoading, setNotification]);

    return (
        <Container id={mediaType} className="py-2">
            <Spacer height={5} />
            <h1 className="pagetitle text-capitalize">{titles[mediaType]}</h1>
            {!isLoading && (mediaItems?.length
                ? mediaItems.map(x => (
                    <Row key={x.id} className="py-5">
                        <div className="col-md-4">
                            <Iframe media={x} />
                        </div>
                        <div className="col-md-6">
                            <h5>{x.title}</h5>
                            <p>{x.description}</p>
                        </div>
                    </Row>
                ))
                : <h4 className="py-2">{negatives[mediaType]}</h4>)
            }
        </Container>
    );
};

export default Media;
