import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import s from "./LoginForm.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("This field is required"),
  });
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
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
          <div className={s.wrapper}>
            <Field name="email" placeholder="Enter your email" type="email" />
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>
          <div className={s.wrapper}>
            <Field
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>
          <button type="submit">Login</button>
          <p>
            You do not have account? <Link to="/register">Sign up!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
