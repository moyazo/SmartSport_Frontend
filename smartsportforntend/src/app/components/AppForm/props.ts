import { FormikTouched } from "formik";

export type Props ={
    handleSubmit: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    values: {
        email: string;
        password: string;
    };
    isSubmitting: boolean;
    errors: {
        email?: string;
        password?: string;
    };
    touched: FormikTouched<{
        email: string;
        password: string;
    }>
}