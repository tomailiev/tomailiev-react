import { Button, Card } from "react-bootstrap";

const RecCardMini = ({ rec }) => {
    return (
        <Card style={{ width: '16rem' }}>
            <div className="img-restrain">
                <a href={rec.infoUrl} target="_blank" rel="noreferrer">
                    <Card.Img variant="top" src={rec.imageUrl} alt="CD cover" />
                </a>
            </div>
            <Card.Body className="card-home">
                <Button href={rec.cdUrl} rel="noreferrer" target="_blank" size="sm" variant="outline-dark">
                    Buy CD
                </Button>
                <Button href="#/disco" size="sm" variant="outline-dark">More CDs</Button>
            </Card.Body>
        </Card>

    );
};

export default RecCardMini;