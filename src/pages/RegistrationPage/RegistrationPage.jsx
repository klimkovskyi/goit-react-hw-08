import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("This field is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("This field is required"),
  });

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <div className={s.wrap}>
            <Field name="name" placeholder="Enter your name" type="text" />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>
          <div className={s.wrap}>
            <Field name="email" placeholder="Enter your email" type="email" />
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>
          <div className={s.wrap}>
            <Field
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>
          <button type="submit">Register</button>
          <p>
            You already have account? <Link to="/login">Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
