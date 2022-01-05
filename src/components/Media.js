import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Iframe from "./Iframe";

const Media = () => {
    const { pathname } = useLocation();
    const mediaItems = null;

    return (
        <Container id={pathname.substring(1)} className="p-2">
            <h1 className="pagetitle">{pathname.substring(1)}</h1>
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
                : <h4 className="py-2">No {pathname.substring(1)} found. Please check back later.</h4>
            }
        </Container>
    );
};

export default Media;
