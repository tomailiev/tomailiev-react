import { Button, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
    return (
        <Container className="col-md-6 form-container p-5">
            <Row className="py-5"></Row>
            <h2>Get in touch</h2>
            <p> Please fill out all fields. </p>
            <Form role="form">
                <Row>
                    <Form.Group className="col-sm-6">
                        <Form.Label> Name:</Form.Label>
                        <Form.Control type="text" placeholder="name" />
                    </Form.Group>
                    <Form.Group className="col-sm-6">
                        <Form.Label> Email:</Form.Label>
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="col-sm-12">
                        <Form.Label> Subject:</Form.Label>
                        <Form.Control type="text" placeholder="subject" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="col-sm-12">
                        <Form.Label> Message:</Form.Label>
                        <Form.Control as="textarea" type="textarea" maxlength="500" rows="6" placeholder="message" />
                        {/* <div id="c-count" class="text-right">0/500</div> */}
                    </Form.Group>
                </Row>
                <Row>
                    {/* <div class="col-sm-6 form-group"> */}
                        <Button type="submit" variant="dark">Send</Button>
                    {/* </div> */}
                </Row>
            </Form>
        </Container>
    );
};

export default Contact;