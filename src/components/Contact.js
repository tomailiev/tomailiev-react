import { Button, Container, Row, Form, Col } from "react-bootstrap";
import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik';
import contactFormSchema from "../utils/yupSchema";
import { uploadItem } from "../utils/firebaseDB";
import Spacer from "./Spacer";
import { useContext } from "react";
import NotificationContext from "../context/notificationContext";
import LoadingContext from "../context/loadingContext";

const Contact = () => {

    const { setIsLoading } = useContext(LoadingContext);
    const { setNotification } = useContext(NotificationContext);

    function handleSubmission(values, { setSubmitting, resetForm }) {
        setIsLoading(true);
        uploadItem('messages', values)
            .then(res => {
                setIsLoading(false);
                setNotification({ type: 'success', message: 'Message sent successfully' });
                console.log(res);
                setSubmitting(false);
                resetForm();
            })
            .catch(err => {
                setIsLoading(false);
                setSubmitting(false);
                console.log(err.code);
                setNotification({ type: 'warning', message: 'Something went wrong. Your message was NOT sent. Please try again' });
            });
    }

    return (
        <>
            <Spacer height={5} />
            <Container className="col-md-6 form-container p-5">
                <h2>Get in touch</h2>
                <p> Please fill out all fields. </p>
                <Formik
                    initialValues={{ name: '', email: '', subject: '', message: '' }}
                    validationSchema={contactFormSchema}
                    onSubmit={handleSubmission}
                >
                    {({ isSubmitting, values, errors, touched, handleChange, handleBlur, resetForm }) => (
                        <FormikForm>
                            <Row>
                                <Field name="name" >
                                    {() => (
                                        <Form.Group className="col-sm-6 py-3">
                                            <Form.Label> Name:</Form.Label>
                                            <Form.Control
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.name && errors.name}
                                                type="text"
                                                placeholder="Your name"
                                            />
                                            <ErrorMessage name="name" component="div" style={{ position: 'absolute', color: '#dc3545' }} />
                                        </Form.Group>
                                    )}
                                </Field>
                                <Field>
                                    {() => (
                                        <Form.Group className="col-sm-6 py-3">
                                            <Form.Label> Email:</Form.Label>
                                            <Form.Control
                                                id="email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={(touched.email && errors.email)}
                                                type="email"
                                                placeholder="Your email"
                                            />
                                            <ErrorMessage name="email" component="div" style={{ position: 'absolute', color: '#dc3545' }} />
                                        </Form.Group>
                                    )}
                                </Field>
                            </Row>
                            <Row>
                                <Field>
                                    {() => (
                                        <Form.Group className="col-sm-12 py-3">
                                            <Form.Label> Subject:</Form.Label>
                                            <Form.Control
                                                id="subject"
                                                name="subject"
                                                value={values.subject}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={(touched.subject && errors.subject)}
                                                type="text"
                                                placeholder="Enter subject"
                                            />
                                            <ErrorMessage name="subject" component="div" style={{ position: 'absolute', color: '#dc3545' }} />
                                        </Form.Group>
                                    )}
                                </Field>
                            </Row>
                            <Row>
                                <Field>
                                    {() => (
                                        <Form.Group className="col-sm-12 py-3">
                                            <Form.Label> Message:</Form.Label>
                                            <Form.Control
                                                name="message"
                                                value={values.message}
                                                onChange={handleChange}
                                                isInvalid={touched.message && errors.message}
                                                onBlur={handleBlur}
                                                as="textarea"
                                                type="textarea"
                                                maxLength="500"
                                                rows="6"
                                                placeholder="Enter message"
                                            />
                                            <ErrorMessage name="message" component="div" style={{ position: 'absolute', color: '#dc3545' }} />
                                        </Form.Group>
                                    )}
                                </Field>
                            </Row>
                            <Row className="py-3">
                                <Col>
                                    <Button type="button" disabled={isSubmitting} onClick={resetForm} variant="outline-dark">Reset</Button>
                                </Col>
                                <Col className="text-end">
                                    <Button type="submit" disabled={isSubmitting} variant="outline-dark">Send</Button>
                                </Col>
                            </Row>
                        </FormikForm>
                    )}
                </Formik>
            </Container>
        </>
    );
};

export default Contact;