import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// css module
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
// component pages
import Login from "views/pages/auth/login/Login";
import Register from "views/pages/auth/member/signup";
import ForgotPassword from "views/pages/auth/member/forgot-password/";
import ResetPassword from "views/pages/auth/member/forgot-password/reset-password";
import RegisterEmployer from "views/pages/auth/employer/signup/RegisterEmployer";
import ActiveAccount from "views/pages/auth/member/signup/active-account";
import CompanyReviews from "views/pages/companyReviews/company-detail";
import SearchCompanyReviews from "views/pages/companyReviews/companies";
// import Home from "views/pages/home";
import Profile from "views/pages/auth/member/profile/Profile";
import CVTemplate from "views/pages/CVTemplates";
// services
import authService from "services/auth.service";
// slices
import { logout } from "slices/auth";
// other
import EventBus from "common/EventBus";
import HomePage from "containers/HomePage";
import ProfileMember from "containers/ProfileMember";
import SearchPage from "containers/SearchPage";
import ViewDetailPage from "containers/ViewDetailPage";
import EmployerProfile from "views/pages/employer-profile";

const App = () => {
  const isLoggedIn = authService.isLoggedIn(); //dont remove
  console.log("isLoggedIn", isLoggedIn);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [isLoggedIn, logOut]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-up/employer" element={<RegisterEmployer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/view-detail" element={<ViewDetailPage />}>
          <Route path="/view-detail/:id" element={<ViewDetailPage />}></Route>
        </Route>
        <Route path="/search/:q" element={<SearchPage />} />
        <Route path="/search/:q/:adr" element={<SearchPage />} />
        <Route
          path="/reset-password/:access_token"
          element={<ResetPassword />}
        />
        <Route
          path="/active-account/:access_token"
          element={<ActiveAccount />}
        />
        <Route path="/companies" element={<SearchCompanyReviews />} />
        <Route path="/companies/:slug" element={<CompanyReviews />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/employer/profile"
          element={<EmployerProfile />}
        />
        )
        <Route
          path="/cv-template"
          element={
            !isLoggedIn ? (
              <CVTemplate />
            ) : currentUser &&
              currentUser.is_active &&
              !currentUser.is_staff ? (
              <CVTemplate />
            ) : (
              <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
                PAGE NOT FOUND <i style={{ color: "red" }}>404</i>
              </h1>
            )
          }
        />
        <Route
          render={() => (
            <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
              PAGE NOT FOUND <i style={{ color: "red" }}>404</i>
            </h1>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
