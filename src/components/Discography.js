import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import LoadingContext from "../context/loadingContext";
import NotificationContext from "../context/notificationContext";
import { getItems } from "../utils/firebaseDB";
import RecCard from "./RecCard";
import Spacer from "./Spacer";

const Discography = () => {

    const { isLoading, setIsLoading } = useContext(LoadingContext);
    const { setNotification } = useContext(NotificationContext);

    const [recs, setRecs] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getItems('recs')
            .then(items => {
                setIsLoading(false);
                setRecs(items);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err.code);
                setNotification({ type: 'warning', message: 'Something went wrong. Check connection and try again' });
            });
    }, [setIsLoading, setNotification]);

    return (
        <Container className="py-5">
            <Spacer height={4} />
            <h1 className="pagetitle text-capitalize">Recordings</h1>
            {recs?.length && !isLoading
                ? <Row xl={4} lg={3} md={1} sm={1} xs={1} className="justify-content-between">
                    {/* <CardGroup> */}
                    {recs.map(x => <RecCard key={x.id} rec={x} />)}
                    {/* </CardGroup> */}
                </Row>
                : <h4 className="py-2">No recordings found. Please check back later.</h4>
            }
        </Container>
    );
};

export default Discography;