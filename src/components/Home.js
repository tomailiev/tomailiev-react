import { Button, Col, Container, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Banner from "./Banner"
import BioMini from "./BioMini"
import EventsTable from "./EventsTable"
import MediaCardMini from "./MediaCardMini"
import RecCardMini from "./RecCardMini"

const Home = () => {

    const rec = {
        cdUrl: "https://smile.amazon.com/Bach-Orchestral-Suites-American-Soloists/dp/B07MCDY1F2/ref=tmm_acd_swatch_0?_encoding=UTF8&qid=1598400455&sr=8-1",
        featured: false,
        groupName: "American Bach Soloists",
        imageUrl: "https://tomailiev.com/pics/recs/ABS_Bach.jpg",
        infoUrl: "https://americanbach.org/recordings/Bach-Suites/",
        itunesUrl: "https://music.apple.com/us/album/bach-orchestral-suites/1448521533?app=itunes",
        spotifyUrl: "https://open.spotify.com/album/5fmwhqA484R3whdRfap9X4?si=9BhSSfXjQOWaGH2MjoVOJA",
        title: "Bach: Orchestral Suites",
    };

    const audio = {
        audioUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289913880&color=%23b55e33&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        description: "Valley of the Moon Music Festival",
        featured: false,
        title: "F. Mendelssohn - String Quartet in A minor op.13: II. Adagio non Lento",
    };

    const video = {
        channelUrl: "https://www.youtube.com/channel/UCeVe6QPmQasY04T4-NyeP0Q",
        description: "Great Arts. Period.",
        featured: false,
        title: "Seasons of Bulgaria: Folk-inspired Music for Solo Violin",
        videoUrl: "https://www.youtube.com/embed/YcZhQifYpiw",
    }

    // const events = null;
    const events = [
        {
            dateTime: 'October 28, 2021 at 10: 30: 00 PM UTC- 4',
            date: 'Oct 1 2021',
            time: '10:30',
            eventName: "The No One's Rose",
            eventUrl: "https://philharmonia.org/2021-2022-season-2/the-no-ones-rose/#tickets",
            groupName: "Philharmonia Baroque Orchestra",
            id: "47o7Njn2Vz99KyrKU0de",
            location: "Stanford CA",
            venue: "Bing Concert Hall",
        },
        {
            dateTime: 'October 28, 2021 at 10: 30: 00 PM UTC- 4',
            date: 'Oct 2 2021',
            time: '10:30',
            eventName: "The No One's Rose",
            eventUrl: "https://philharmonia.org/2021-2022-season-2/the-no-ones-rose/#tickets",
            groupName: "Philharmonia Baroque Orchestra",
            id: "47o7Njn2Vz99KyrKU0d8hre",
            location: "Stanford CA",
            venue: "Bing Concert Hall",
        }
    ]

    return (
        <>
            <Banner />
            <div className="spacer"></div>
            <div className="container section-container snaptarget">
                <Row>
                    <BioMini />
                    {/* {{ #if featuredRec }} */}
                    <div className="col-md-3 border-left d-md-block">
                        <h3 className="my-3">Featured recording</h3>
                        <RecCardMini rec={rec} />
                    </div>
                    {/* {{/if}} */}
                </Row>
            </div>
            <Container fluid className="bg-dark text-white py-5 snaptarget mt-3">
                {/* <Row> */}
                <Container>
                    <h3 className="pb-3">Upcoming events</h3>
                    {events
                        ?
                        <>
                            <EventsTable events={events} />
                            <LinkContainer to="/calendar">
                                <Button size="sm" variant="light">Continue browsing &#187;</Button>
                            </LinkContainer>
                        </>
                        : <h4>No events found <i class="fas fa-heart-broken"></i></h4>}
                </Container>
                {/* </Row> */}
            </Container>
            <Container className="py-5 bg-light snaptarget">
                <h3>Featured media</h3>
                <Row className="py-3">
                    <Col className="md-6">
                        {/* {{ #if featuredAudio }} */}
                        <MediaCardMini media={audio} />
                        <div style={{ width: 'inherit' }} className="mx-auto pt-3 pb-5">
                            <LinkContainer to="/audios">
                                <Button size="sm" variant="dark">
                                    Continue listening &#187;
                                </Button>
                            </LinkContainer>
                        </div>
                    </Col>
                    {/* {{ else}}
                    {{/if}}
                    {{ #if featuredVideo }} */}
                    <Col className="md-6">
                        <MediaCardMini media={video} />
                        <div style={{ width: 'inherit' }} className="mx-auto pt-3 pb-5">
                            <LinkContainer to="/videos">
                                <Button size="sm" variant="dark">
                                    Continue watching &#187;
                                </Button>
                            </LinkContainer>
                        </div>
                    </Col>
                </Row>
                {/* {{ else}}
                    {{/if}} */}
            </Container>
        </>
    );
};

export default Home;