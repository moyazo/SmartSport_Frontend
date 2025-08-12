import React from 'react';
import { Props } from './props';
import FormBtn from 'app/components/FormBtn/formbtn';
import FormInput from 'app/components/FormInput/formInput';
const AppForm = (props: Props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <FormInput
                type="email"
                name="email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
            />
            {props.touched.email && props.errors.email}
            <FormInput
                type="password"
                name="password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
            />
            {props.touched.password && props.errors.password}
            <FormBtn
                id="SignUpBtn"
                content="Sign up"
                type="submit"
                className="ButtoneClass"
                disabled={props.isSubmitting}
            />
        </form>
    );
};

export default AppForm;
