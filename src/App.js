import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

import Login from "views/pages/auth/login/Login";
import Register from "views/pages/auth/member/signup";
import ForgotPassword from "views/pages/auth/member/forgot-password/"
import ResetPassword from "views/pages/auth/member/forgot-password/reset-password"
import RegisterEmployer from "views/pages/auth/employer/signup/RegisterEmployer";
// import Home from "views/pages/home";
import Profile from "views/pages/auth/member/profile/Profile";
import CVTemplate from "views/pages/CVTemplates";

import { logout } from "slices/auth";

import EventBus from "common/EventBus";
import HomePage from "containers/HomePage";

const App = () => {

  // const authentication = localStorage.getItem('authentication'); //dont delete
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
  }, [currentUser, logOut]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-up/employer" element={<RegisterEmployer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />)
        <Route path="/cv-template" element={(!currentUser)
          ? <CVTemplate />
          : (
            (currentUser.is_active && !currentUser.is_staff)
              ? <CVTemplate />
              : <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>
                PAGE NOT FOUND <i style={{ color: 'red' }}>404</i>
              </h1>
          )
        } />
        <Route
          render={() => (
            <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>
              PAGE NOT FOUND <i style={{ color: 'red' }}>404</i>
            </h1>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
