import { Button, ButtonGroup, Card, Col } from "react-bootstrap";

const RecCard = ({ rec }) => {
    return (
        <Card as={Col} className="disco-card px-0 my-4 mx-lg-4 mx-md-0">
            <div className="img-restrain">
                <a href={rec.infoUrl} target="_blank" rel="noreferrer">
                    <Card.Img className="card-img-top" src={rec.imageUrl} alt="Card image cap" />
                </a>
            </div>
            <Card.Body>
                <Card.Title>{rec.title}</Card.Title>
                <Card.Text className="card-text text-secondary">{rec.groupName}</Card.Text>
            </Card.Body>
            <Card.Footer className="disco-footer">
                <ButtonGroup className="container-fluid" size="sm">
                    <Button href={rec.cdUrl} target="_blank" variant="outline-dark" rel="noreferrer"><i className="fas fa-compact-disc fa-2x"></i></Button>
                    <Button href={rec.spotifyUrl} target="_blank" variant="outline-dark" rel="noreferrer"><i className="fab fa-spotify fa-2x"></i></Button>
                    <Button href={rec.itunesUrl} target="_blank" variant="outline-dark" rel="noreferrer"><i className="fab fa-itunes-note fa-2x"></i></Button>
                </ButtonGroup>
            </Card.Footer>
        </Card>
    );
};

export default RecCard;