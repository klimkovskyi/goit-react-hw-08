import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
