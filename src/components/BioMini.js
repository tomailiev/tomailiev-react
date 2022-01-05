import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const BioMini = () => {
    return (
        <div id="home-bio" className="col-md-8 pr-4">
            <h3>Bio</h3>
            <p>Toma Iliev is a violinist focused on historically informed performance. Holder of the Ruth and Charles Poindexter chair with the Portland Baroque Orchestra, recent engagements include performances with Philharmonia Baroque Orchestra, American Bach Soloists, Oregon Bach Festival, Indianapolis Baroque Orchestra, Clarion Music Society, and the Valley of the Moon Festival, as well as broadcasts on MediciTV, BBC3 radio, WQXR, and the CBC “Rush Hour” series.</p>
            <LinkContainer to="/about">
                <Button size="sm" variant="outline-dark">Continue reading &#187;</Button>
            </LinkContainer>
        </div>
    );
};

export default BioMini;