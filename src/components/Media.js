import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Iframe from "./Iframe";

const Media = () => {
    const { pathname } = useLocation();
    const mediaItems = [
        {
            audioUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289913880&color=%23b55e33&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            description: "Valley of the Moon Music Festival",
            featured: false,
            title: "F. Mendelssohn - String Quartet in A minor op.13: II. Adagio non Lento",
        },
        {
            channelUrl: "https://www.youtube.com/channel/UCeVe6QPmQasY04T4-NyeP0Q",
            description: "Great Arts. Period.",
            featured: false,
            title: "Seasons of Bulgaria: Folk-inspired Music for Solo Violin",
            videoUrl: "https://www.youtube.com/embed/YcZhQifYpiw",
        }
    ]

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
