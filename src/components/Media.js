import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import LoadingContext from "../context/loadingContext";
import { getItems } from "../utils/firebaseDB";
import Iframe from "./Iframe";

const Media = () => {

    const { isLoading, setIsLoading } = useContext(LoadingContext)
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
                console.error(err);
            });
    }, [mediaType, setIsLoading]);

    return (
        <Container id={mediaType} className="p-2">
            <h1 className="pagetitle text-capitalize">{mediaType}</h1>
            {mediaItems?.length && !isLoading
                ? mediaItems.map(x => (
                    <Row key={x.id} className="py-3">
                        <div className="col-md-4">
                            <Iframe media={x} />
                        </div>
                        <div className="col-md-6">
                            <h5>{x.title}</h5>
                            <p>{x.description}</p>
                        </div>
                    </Row>
                ))
                : <h4 className="py-2">No {mediaType} found. Please check back later.</h4>
            }
        </Container>
    );
};

export default Media;
