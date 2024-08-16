import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { fetchContactsThunk } from "./redux/contactsOps";
import { selectError, selectIsLoading } from "./redux/selectors";

function App() {
  const dispach = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispach(fetchContactsThunk());
  }, [dispach]);
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", color: "teal" }}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <b>Request in progress...</b>}
        {error && <b>Error: {error}</b>}
        <ContactList />
      </div>
    </>
  );
}

export default App;
