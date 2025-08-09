export const API_URL = 'http://127.0.0.1:8000';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .min(6, 'Too Short!')
        .max(255, 'Too Long!')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(255, 'Too Long!')
        .required('Password is required'),
});

export const initialValuesSignUp = {
    email: '',
    password: '',
};
