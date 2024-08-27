import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMeThunk } from "./redux/auth/operations";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import { PublicRoute } from "./components/Routes/PublicRoute";
import { selectIsRefereshing } from "./redux/auth/selectors";
import Loader from "./components/Loader/Loader";

function App() {
  const isRefreshing = useSelector(selectIsRefereshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
