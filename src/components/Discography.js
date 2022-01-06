import { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import { getItems } from "../utils/firebaseDB";
import RecCard from "./RecCard";

const Discography = () => {
    const [recs, setRecs] = useState(null);

    useEffect(() => {
        getItems('recs')
            .then(items => {
                setRecs(items);
            })
            .catch(console.error);
    }, []);

    return (
        <Container className="p-2">
            <h1 className="mx-5">Recordings</h1>
            {recs
                ? <CardGroup className="card-deck disco-deck">
                    {recs.map(x => <RecCard key={x.id} rec={x} />)}
                </CardGroup>
                : <h4 className="py-2">No recordings found. Please check back later.</h4>
            }
        </Container>
    );
};

export default Discography;