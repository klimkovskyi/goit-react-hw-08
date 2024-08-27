import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <main className={s.main}>
        <div className={s.container}>
          <h1 className={s.title}>Welcome to Phone Book</h1>
          <p className={s.description}>
            Your personal phone book application where you can create, save, and
            manage all your contacts in one place. Keep your important numbers
            safe and accessible anytime, anywhere.
          </p>
          <Link to="/contacts" className={s.button}>
            Get Started
          </Link>
        </div>
      </main>
    </>
  );
};

export default HomePage;
