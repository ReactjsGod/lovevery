import * as Yup from "yup";

export const validationSchemaStep2 = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  password: Yup.string().required("Password is required"),
});

export const validationSchemaStep1 = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});
