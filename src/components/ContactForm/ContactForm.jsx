import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const handleAddContact = (data, actions) => {
    dispatch(addContactThunk({ name: data.name, number: data.number }))
      .then(() => {
        toast.success("Contact added successfully!");
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Failed to add contact. Please try again.");
      });
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be more than 3 chars!")
      .max(20, "Name must be less than 20 chars"),
    number: Yup.number("It's not a number")
      .typeError("It's not a number")
      .required("Number is required"),
  });
  return (
    <div className={s.wrapper}>
      <Toaster position="top-right" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleAddContact}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
