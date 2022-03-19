import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "views/pages/auth/login/Login";
import Register from "views/pages/auth/member/signup";
import ForgotPassword from "views/pages/auth/member/forgot-password"
import ResetPassword from "views/pages/auth/member/forgot-password/reset-password"
import RegisterEmployer from "views/pages/auth/employer/signup/RegisterEmployer";
import ActiveAccount from "views/pages/auth/member/signup/active-account"
import Home from "views/pages/home";
import Profile from "views/pages/auth/member/profile/Profile";

import { logout } from "slices/auth";

import EventBus from "common/EventBus";
import HomePage from "containers/HomePage";

const App = () => {

  // const authToken = localStorage.getItem('access_token');
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
      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-up/employer" element={<RegisterEmployer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:access_token" element={<ResetPassword />} />
        <Route path="/active-account/:access_token" element={<ActiveAccount />} />
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />)
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
