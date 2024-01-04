import * as yup from "yup";

const addSchoolSchema = yup.object({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    name: yup
        .string()
        .required(),
    address: yup
        .string()
        .required(),
    city: yup
        .string()
        .required(),
    state: yup
        .string()
        .required(),
    contact: yup
        .string()
        .required(),
    image: yup
        .string()
        .required(),
});

export interface FormValues {
    email: string,
    name: string,
    address: string,
    city: string,
    state: string,
    contact: string,
    image: string,
}

export default addSchoolSchema;