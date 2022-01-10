import { Card, Col } from "react-bootstrap";

const RecCard = ({ rec }) => {
    return (
        <Card as={Col} className="m-4 disco-card">
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
                <a href={rec.cdUrl} target="_blank" className="btn btn-light" rel="noreferrer"><i className="fas fa-compact-disc fa-2x"></i></a>
                <a href={rec.spotifyUrl} target="_blank" className="btn btn-light" rel="noreferrer"><i className="fab fa-spotify fa-2x"></i></a>
                <a href={rec.itunesUrl} target="_blank" className="btn btn-light" rel="noreferrer"><i className="fab fa-itunes-note fa-2x"></i></a>
            </Card.Footer>
        </Card>
    );
};

export default RecCard;