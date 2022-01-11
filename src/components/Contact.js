import { Button, Container, Row, Form } from "react-bootstrap";
import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik';
import contactFormSchema from "../utils/yupSchema";
import sendEmail from "../utils/firebaseEmail";
import { uploadItem } from "../utils/firebaseDB";

const Contact = () => {
    function handleSubmission(values, { setSubmitting, resetForm }) {
        // sendEmail(values)
        uploadItem('messages', values)
            .then(res => {
                console.log(res);
                setSubmitting(false);
                resetForm();
            })
            .catch(e => {
                console.error(e);
                setSubmitting(false);
            });
    }

    return (
        <Container className="col-md-6 form-container p-5">
            <Row className="py-5"></Row>
            <h2>Get in touch</h2>
            <p> Please fill out all fields. </p>
            <Formik
                initialValues={{ name: '', email: '', subject: '', message: '' }}
                validationSchema={contactFormSchema}
                onSubmit={handleSubmission}
            >
                {({ isSubmitting, values, errors, touched, handleChange, handleBlur }) => (
                    <FormikForm>
                        <Row>
                            <Field name="name" >
                                {() => (
                                    <Form.Group className="col-sm-6">
                                        <Form.Label> Name:</Form.Label>
                                        <Form.Control
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.name && errors.name}
                                            type="text"
                                            placeholder="Enter your name"
                                        />
                                        <ErrorMessage name="name" component="div" />
                                    </Form.Group>
                                )}
                            </Field>
                            <Field>
                                {() => (
                                    <Form.Group className="col-sm-6">
                                        <Form.Label> Email:</Form.Label>
                                        <Form.Control
                                            id="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={(touched.email && errors.email)}
                                            type="email"
                                            placeholder="Enter your email"
                                        />
                                        <ErrorMessage name="email" component="div" />
                                    </Form.Group>
                                )}
                            </Field>
                        </Row>
                        <Row>
                            <Field>
                                {() => (
                                    <Form.Group className="col-sm-12">
                                        <Form.Label> Subject:</Form.Label>
                                        <Form.Control
                                            id="subject"
                                            name="subject"
                                            value={values.subject}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={(touched.subject && errors.subject)}
                                            type="subject"
                                            placeholder="Enter subject"
                                        />
                                        <ErrorMessage name="subject" component="div" />
                                    </Form.Group>
                                )}
                            </Field>
                        </Row>
                        <Row>
                            <Field>
                                {() => (
                                    <Form.Group className="col-sm-12">
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
                                            placeholder="message"
                                        />
                                        <ErrorMessage name="message" component="div" />
                                    </Form.Group>
                                )}
                            </Field>
                        </Row>
                        <Row>
                            <Button type="submit" disabled={isSubmitting} variant="dark">Send</Button>
                        </Row>
                    </FormikForm>
                )}
            </Formik>
        </Container>
    );
};

export default Contact;