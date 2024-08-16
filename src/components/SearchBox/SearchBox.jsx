import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="searchInput">
        <span>Find contacts by name</span>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          onChange={handleChangeInput}
        />
      </label>
    </div>
  );
};

export default SearchBox;
