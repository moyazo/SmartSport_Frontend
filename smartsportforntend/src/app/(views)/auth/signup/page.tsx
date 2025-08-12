'use client';
import { Formik } from 'formik';
import {
    initialValuesSignUp,
    validationSchema,
} from '../../../../../common/constants';
import { signup } from 'app/services/api/auth';
import AppForm from 'app/components/AppForm/appform';

const SignUp = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={initialValuesSignUp}
            validationSchema={validationSchema}
            // en tu componente con Formik
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                    const userData = {
                        email: values.email,
                        password: values.password,
                    };

                    const res = await signup(userData);

                    if (res.message && !res.token) {
                        // Si hay mensaje pero no hay token => error
                        alert(`Error: ${res.message}`);
                        return;
                    }

                    // Si hay token => usuario registrado correctamente
                    alert('Registro exitoso');
                    resetForm();
                } catch (err) {
                    console.error(err);
                    alert('Error inesperado al registrar');
                } finally {
                    setSubmitting(false);
                }
            }}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <AppForm
                    touched={touched}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    isSubmitting={isSubmitting}
                    errors={errors}
                />
            )}
        </Formik>
    </div>
);

export default SignUp;
