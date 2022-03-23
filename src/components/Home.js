import { useContext, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import NavbarThemeContext from "../context/navbarThemeContext"
import NotificationContext from "../context/notificationContext"
import LanguageContext from '../context/languageContext'
import { getItems } from "../utils/firebaseDB"
import Banner from "./Banner"
import BioMini from "./BioMini"
import EventModal from "./EventModal"
import EventsTable from "./EventsTable"
import MediaCardMini from "./MediaCardMini"
import RecCardMini from "./RecCardMini"
import { footerCSS } from "../styles-js"

const Home = () => {

    const { setNavbarTheme } = useContext(NavbarThemeContext);
    const { setNotification } = useContext(NotificationContext);
    const { language: { buttons, titles, negatives, messages } } = useContext(LanguageContext);

    const [rec, setRec] = useState(null);
    const [audio, setAudio] = useState(null);
    const [video, setVideo] = useState(null);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setNavbarTheme('dark');

        return () => {
            setNavbarTheme(null);
        };
    }, [setNavbarTheme]);

    useEffect(() => {
        Promise.allSettled([
            getItems('recs', ['featured', '==', true], 1),
            getItems('audios', ['featured', '==', true], 1),
            getItems('videos', ['featured', '==', true], 1),
            getItems('events', ['dateTime', '>=', new Date()], 3, ['dateTime', 'asc']),
        ])
            .then((results) => {
                const [featuredRec, featuredAudio, featuredVideo, featuredEvents] = results;
                featuredRec.value && setRec(...featuredRec.value);
                featuredVideo.value && setVideo(...featuredVideo.value);
                featuredAudio.value && setAudio(...featuredAudio.value);
                featuredEvents.value && setEvents(featuredEvents.value);
                if (results.find(x => x.status === 'rejected')) {
                    throw new Error(messages.home);
                }
            })
            .catch(err => {
                setNotification({ type: 'warning', message: err.message });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setNotification]);

    return (
        <>
            <Banner />
            {/* <Spacer vh={70} /> */}
            <Container className="section-container snaptarget">
                <Row>
                    <BioMini />
                    {rec && <Col md={{ span: 3, offset: 1 }}>
                        <h3 className="my-3">{titles.home.rec}</h3>
                        <RecCardMini rec={rec} />
                    </Col>}
                </Row>
            </Container>
            <Container fluid className="bg-dark text-white py-5 snaptarget mt-3" style={footerCSS}>
                <Container>
                    <h3 className="pb-3">{titles.home.events}</h3>
                    {events.length
                        ?
                        <>
                            <EventsTable events={events} />
                            <LinkContainer to="/calendar">
                                <Button size="sm" variant="outline-light">{buttons.home.events} &#187;</Button>
                            </LinkContainer>
                        </>
                        : <h4>{negatives.events}<i className="fas fa-heart-broken"></i></h4>}
                </Container>
            </Container>
            <Container className="py-5 bg-light snaptarget">
                <h3>{titles.home.media}</h3>
                <Row className="py-3">
                    {audio && <Col md={12} lg={4}>
                        <MediaCardMini media={audio} />
                        <div className="mx-auto pt-3 pb-5">
                            <LinkContainer to="/audios">
                                <Button size="sm" variant="outline-dark">
                                    {buttons.home.audio} &#187;
                                </Button>
                            </LinkContainer>
                        </div>
                    </Col>}
                    {video && <Col md={12} lg={{ span: 4, offset: 4 }}>
                        <MediaCardMini media={video} />
                        <div className="mx-auto pt-3 pb-5">
                            <LinkContainer to="/videos">
                                <Button size="sm" variant="outline-dark">
                                    {buttons.home.video} &#187;
                                </Button>
                            </LinkContainer>
                        </div>
                    </Col>}
                    {(!audio && !video) && <h4 className="py-2">{negatives.media}</h4>}
                </Row>
            </Container>
            <EventModal />
        </>
    );
};

export default Home;