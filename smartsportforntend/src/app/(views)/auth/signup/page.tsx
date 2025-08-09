'use client';
import { Formik } from 'formik';
import {
    initialValuesSignUp,
    validationSchema,
} from '../../../../../common/constants';
import { signup } from 'app/services/api/auth';

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
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default SignUp;
