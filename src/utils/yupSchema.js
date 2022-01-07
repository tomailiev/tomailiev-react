import * as yup from 'yup';

const contactFormSchema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    subject: yup.string().required('Please enter a subject'),
    message: yup.string().required('Please enter a message')
});

export default contactFormSchema;