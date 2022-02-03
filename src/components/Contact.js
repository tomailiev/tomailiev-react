import { Button, Container, Row, Form, Col } from "react-bootstrap";
import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik';
import contactFormSchema from "../utils/yupSchema";
import { uploadItem } from "../utils/firebaseDB";
import Spacer from "./Spacer";
import { useContext } from "react";
import NotificationContext from "../context/notificationContext";
import LoadingContext from "../context/loadingContext";
import LanguageContext from "../context/languageContext";
import { errorMessageCSS } from '../styles-js';

const Contact = () => {

    const { setIsLoading } = useContext(LoadingContext);
    const { setNotification } = useContext(NotificationContext);
    const { language: { titles, contactForm, buttons, messages } } = useContext(LanguageContext);

    function handleSubmission(values, { setSubmitting, resetForm }) {
        setIsLoading(true);
        uploadItem('messages', values)
            .then(res => {
                setIsLoading(false);
                setNotification({ type: 'success', message: messages.success });
                console.log(res);
                setSubmitting(false);
                resetForm();
            })
            .catch(err => {
                setIsLoading(false);
                setSubmitting(false);
                console.log(err.code);
                setNotification({ type: 'warning', message: messages.failure });
            });
    }

    return (
        <>
            <Spacer height={5} />
            <Container className="col-md-6 form-container p-5">
                <h2>{titles.contact.main}</h2>
                <p> {titles.contact.sub} </p>
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
                                            <Form.Label>{contactForm.name}</Form.Label>
                                            <Form.Control
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.name && errors.name}
                                                type="text"
                                                placeholder={contactForm.placeholders.name}
                                            />
                                            <ErrorMessage name="name" component="div" style={errorMessageCSS} />
                                        </Form.Group>
                                    )}
                                </Field>
                                <Field>
                                    {() => (
                                        <Form.Group className="col-sm-6 py-3">
                                            <Form.Label>{contactForm.email}</Form.Label>
                                            <Form.Control
                                                id="email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={(touched.email && errors.email)}
                                                type="email"
                                                placeholder={contactForm.placeholders.email}
                                            />
                                            <ErrorMessage name="email" component="div" style={errorMessageCSS} />
                                        </Form.Group>
                                    )}
                                </Field>
                            </Row>
                            <Row>
                                <Field>
                                    {() => (
                                        <Form.Group className="col-sm-12 py-3">
                                            <Form.Label>{contactForm.subject}</Form.Label>
                                            <Form.Control
                                                id="subject"
                                                name="subject"
                                                value={values.subject}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={(touched.subject && errors.subject)}
                                                type="text"
                                                placeholder={contactForm.placeholders.subject}
                                            />
                                            <ErrorMessage name="subject" component="div" style={errorMessageCSS} />
                                        </Form.Group>
                                    )}
                                </Field>
                            </Row>
                            <Row>
                                <Field>
                                    {() => (
                                        <Form.Group className="col-sm-12 py-3">
                                            <Form.Label>{contactForm.message}</Form.Label>
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
                                                placeholder={contactForm.placeholders.message}
                                            />
                                            <ErrorMessage name="message" component="div" style={errorMessageCSS} />
                                        </Form.Group>
                                    )}
                                </Field>
                            </Row>
                            <Row className="py-3">
                                <Col>
                                    <Button type="button" disabled={isSubmitting} onClick={resetForm} variant="outline-dark">{buttons.contact.reset}</Button>
                                </Col>
                                <Col className="text-end">
                                    <Button type="submit" disabled={isSubmitting} variant="outline-dark">{buttons.contact.send}</Button>
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