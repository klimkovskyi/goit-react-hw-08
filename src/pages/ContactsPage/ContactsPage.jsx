import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "../../redux/contacts/operations";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "teal" }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      {error && <b>Error: {error}</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
