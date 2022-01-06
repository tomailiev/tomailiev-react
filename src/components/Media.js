import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getItems } from "../utils/firebaseDB";
import Iframe from "./Iframe";

const Media = () => {
    const { pathname } = useLocation();
    const mediaType = pathname.substring(1);

    const [mediaItems, setMediaItems] = useState(null);

    useEffect(() => {
        getItems(mediaType)
            .then(items => {
                setMediaItems(items);
            })
            .catch(console.error);
    }, [mediaType]);

    return (
        <Container id={mediaType} className="p-2">
            <h1 className="pagetitle">{mediaType}</h1>
            {mediaItems
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
