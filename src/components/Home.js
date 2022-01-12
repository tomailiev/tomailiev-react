import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { getItems } from "../utils/firebaseDB"
import Banner from "./Banner"
import BioMini from "./BioMini"
import EventModal from "./EventModal"
import EventsTable from "./EventsTable"
import MediaCardMini from "./MediaCardMini"
import RecCardMini from "./RecCardMini"

const Home = () => {

    const [rec, setRec] = useState(null);
    const [audio, setAudio] = useState(null);
    const [video, setVideo] = useState(null);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        Promise.all([
            getItems('recs', ['featured', '==', true], 1),
            getItems('audios', ['featured', '==', true], 1),
            getItems('videos', ['featured', '==', true], 1),
            getItems('events', ['dateTime', '>=', new Date()], 3, ['dateTime', 'asc']),
        ])
            .then(([featuredRec, featuredAudio, featuredVideo, featuredEvents]) => {
                setRec(...featuredRec);
                setVideo(...featuredVideo);
                setAudio(...featuredAudio);
                setEvents(featuredEvents);
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <Banner />
            <div className="spacer"></div>
            <div className="container section-container snaptarget">
                <Row>
                    <BioMini />
                    {rec && <div className="col-md-3 border-left d-md-block">
                        <h3 className="my-3">Featured recording</h3>
                        <RecCardMini rec={rec} />
                    </div>}
                </Row>
            </div>
            <Container fluid className="bg-dark text-white py-5 snaptarget mt-3">
                <Container>
                    <h3 className="pb-3">Upcoming events</h3>
                    {events.length
                        ?
                        <>
                            <EventsTable events={events} />
                            <LinkContainer to="/calendar">
                                <Button size="sm" variant="light">Continue browsing &#187;</Button>
                            </LinkContainer>
                        </>
                        : <h4>No events found <i className="fas fa-heart-broken"></i></h4>}
                </Container>
            </Container>
            <Container className="py-5 bg-light snaptarget">
                <h3>Featured media</h3>
                <Row className="py-3">
                    {audio && <Col className="md-6">
                        <MediaCardMini media={audio} />
                        <div style={{ width: 'inherit' }} className="mx-auto pt-3 pb-5">
                            <LinkContainer to="/audios">
                                <Button size="sm" variant="dark">
                                    Continue listening &#187;
                                </Button>
                            </LinkContainer>
                        </div>
                    </Col>}
                    {video && <Col className="md-6">
                        <MediaCardMini media={video} />
                        <div style={{ width: 'inherit' }} className="mx-auto pt-3 pb-5">
                            <LinkContainer to="/videos">
                                <Button size="sm" variant="dark">
                                    Continue watching &#187;
                                </Button>
                            </LinkContainer>
                        </div>
                    </Col>}
                </Row>
            </Container>
            <EventModal />
        </>
    );
};

export default Home;