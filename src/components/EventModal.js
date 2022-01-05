import { Button, Card, Container, Modal, Row } from "react-bootstrap"
import Iframe from "./Iframe"

const EventModal = ({ event, show }) => {
    return (
        <Modal id="eventModal" show={show}>
            {/* <Modal.Dialog centered> */}
                {/* <div className="modal-content"> */}
                    <Modal.Header closeButton>
                        <Modal.Title id="exampleModalLabel"></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid>
                            <Row>
                                <div className="col-md-7">
                                    <p id="alt"></p>
                                    <Iframe media={{ title: event.eventName, videoUrl: event.mapCoordinates }} size="1x1" />
                                </div>
                                <div className="col-md-5">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{event.eventName}</Card.Title>
                                            <Card.Text>{event.groupName}</Card.Text>
                                            <Button size="sm" variant="dark" id="tix" href={event.eventUrl} target="blank">Tickets</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="dark">Close</Button>
                        <Button size="sm" variant="dark" href="" target="_blank" rel="nofollow">Add to calendar</Button>
                    </Modal.Footer>
                {/* </div> */}
            {/* </Modal.Dialog> */}
        </Modal>
    );
};

export default EventModal;