import { CardGroup, Container } from "react-bootstrap";
import RecCard from "./RecCard";

const Discography = () => {
    const recs = [
        {
            cdUrl: "https://smile.amazon.com/Bach-Orchestral-Suites-American-Soloists/dp/B07MCDY1F2/ref=tmm_acd_swatch_0?_encoding=UTF8&qid=1598400455&sr=8-1",
            featured: false,
            groupName: "American Bach Soloists",
            imageUrl: "https://tomailiev.com/pics/recs/ABS_Bach.jpg",
            infoUrl: "https://americanbach.org/recordings/Bach-Suites/",
            itunesUrl: "https://music.apple.com/us/album/bach-orchestral-suites/1448521533?app=itunes",
            spotifyUrl: "https://open.spotify.com/album/5fmwhqA484R3whdRfap9X4?si=9BhSSfXjQOWaGH2MjoVOJA",
            title: "Bach: Orchestral Suites",
        },
        {
            cdUrl: "https://smile.amazon.com/Bach-Orchestral-Suites-American-Soloists/dp/B07MCDY1F2/ref=tmm_acd_swatch_0?_encoding=UTF8&qid=1598400455&sr=8-1",
            featured: false,
            groupName: "American Bach Soloists",
            imageUrl: "https://tomailiev.com/pics/recs/ABS_Bach.jpg",
            infoUrl: "https://americanbach.org/recordings/Bach-Suites/",
            itunesUrl: "https://music.apple.com/us/album/bach-orchestral-suites/1448521533?app=itunes",
            spotifyUrl: "https://open.spotify.com/album/5fmwhqA484R3whdRfap9X4?si=9BhSSfXjQOWaGH2MjoVOJA",
            title: "Bach: Orchestral Suites",
        }
    ];

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