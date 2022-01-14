import { useContext } from "react";
import { Button, Card, Container, Modal, Row } from "react-bootstrap"
import EventContext from "../context/eventContext";
import createGCalLink from "../utils/gCalendarUtil";
import Iframe from "./Iframe"

const EventModal = () => {
    const { event, setEvent } = useContext(EventContext);

    function handleClose() {
        setEvent(null);
    }


    return (
        event && <Modal id="eventModal" show={!!event} onHide={handleClose}>
            {/* <Modal.Dialog centered> */}
            {/* <div className="modal-content"> */}
            <Modal.Header closeButton>
                <Modal.Title>{event.eventName}</Modal.Title>
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
                                <Card.Body className="d-grid gap-2">
                                    <Card.Text>{event.groupName}</Card.Text>
                                    <Card.Text>{`${event.date} - ${event.time}`}</Card.Text>
                                    <Button
                                        size="sm"
                                        variant="outline-dark"
                                        href={createGCalLink(event)}
                                        target="_blank"
                                        rel="nofollow">Add to calendar</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button size="sm" variant="outline-dark" onClick={handleClose}>Close</Button>
                <Button size="sm" variant="outline-dark" id="tix" href={event.eventUrl} target="blank">Tickets</Button>
            </Modal.Footer>
            {/* </div> */}
            {/* </Modal.Dialog> */}
        </Modal>
    );
};

export default EventModal;