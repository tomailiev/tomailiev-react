import { Card } from "react-bootstrap";
import Iframe from "./Iframe";

const MediaCardMini = ({ media }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Iframe media={media} />
            <Card.Body>
                <Card.Text>{media.title}</Card.Text>
                <Card.Text color="secondary">{media.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MediaCardMini;