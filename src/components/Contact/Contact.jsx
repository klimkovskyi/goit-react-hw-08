import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
import { toast, Toaster } from "react-hot-toast";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContactThunk(id))
      .then(() => {
        toast.success(`Contact ${name} deleted successfully!`);
      })
      .catch(error => {
        console.log(error.message);
        toast.error("Failed to delete contact. Please try again.");
      });
  };
  return (
    <div className={s.wrapper}>
      <div>
        <p className={s.input}>
          <FaUser className={s.icon} />
          <span className={s.name}>{name}</span>
        </p>
        <p className={s.input}>
          <FaPhone className={s.icon} />
          <span className={s.name}>{number}</span>
        </p>
      </div>
      <Toaster position="top-right" />
      <button onClick={handleDeleteContact} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
