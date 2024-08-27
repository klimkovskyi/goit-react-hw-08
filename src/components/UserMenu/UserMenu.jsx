import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";
import { logoutThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await dispatch(logoutThunk());
    navigate("/login");
  };
  return (
    <div className={s.wrapper}>
      <p className={s.username}>Hello, {user.name}</p>
      <button className={s.button} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
