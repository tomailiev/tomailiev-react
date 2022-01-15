import { Container, Image, Row } from "react-bootstrap";
import BioFull from "./BioFull";
import Blockquote from "./Blockquote";
import Spacer from "./Spacer";
import bioImage from '../imgs/ver3.jpg';

const About = () => {
    const texts = {
        bio: "Toma Iliev is a violinist focused on historically informed performance. Holder of the Ruth and Charles Poindexter chair with the Portland Baroque Orchestra, recent engagements include performances with Philharmonia Baroque Orchestra, American Bach Soloists, Oregon Bach Festival, Indianapolis Baroque Orchestra, Clarion Music Society, and the Valley of the Moon Festival, as well as broadcasts on MediciTV, BBC3 radio, WQXR, and the CBC “Rush Hour” series.$$$ An avid chamber musician, Toma is a member of the Renaissance ensemble Sonnambula, who held the position of 2018 - 19 artists in residence of New York's Metropolitan Museum of Art. Toma was the winner of the 2014 Christa Bach - Marschall Foundation Prize from the Leipzig International Bach Competition, and was the winner of the 2013 Indianapolis Baroque Orchestra Concerto Competition.$$$ A native of Sofia, Bulgaria, Toma discovered his passion for music at an early age.Beginning hisstudies at the National Music School in Sofia, he later received his bachelor and master of music degrees at Indiana University where he studied with Kevork Madriossian and Stanley Ritchie, and received his graduate diploma from the Juilliard School, where he was a member of the prestigious and selective historical performance program.$$$ In addition to performing on baroque and classical violin, his versatility has led him to solo and chamber performances on baroque and classical viola, viola d'amore, and tenor viol, and modern engagements with such ensembles as San Francisco - based conductorless chamber orchestra One Found Sound.Having learned from inspirational figures such as Stanley Ritchie, Monica Huggett, Rachel Podger, Nigel North, Jordi Savall, Robert Levin, Richard Egarr and others, Toma has been developing his own vision of the specifics of historically informed performance and is focused on bringing the evolving principles of the HIP movement to each performance as well as music beyond the baroque and classical repertoire.",
        blockquotes: [
            {
                text: "The sound of concertmaster Toma Illiev's violin intertwining with Gornstein's voice was magical",
                source: 'seen and heard international'
            },
            {
                text: "The group was capably and sensitively led by concertmaster Toma Iliev",
                source: 'the rehearsal studio'
            }
        ]
    }
    return (
        <div className="text-dark py-5 bg-light">
            <Spacer height={4} />
            <Container>
                <h1 className="py-2">About</h1>
                <Row>
                    <BioFull text={texts.bio} />
                    <div className="col-lg-4">
                        <Image
                            fluid
                            src={bioImage}
                            className="d-md-block p-3 border aside" />
                        {texts.blockquotes.map((x, i) => <Blockquote blockquote={x} key={i} />)}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;