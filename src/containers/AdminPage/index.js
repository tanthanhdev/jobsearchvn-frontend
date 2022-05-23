import React from "react";
import PropTypes from "prop-types";
import { Header } from "components/header/Header";
import { Wrap } from "components/wrap/Wrap";
import { Footer } from "components/footer/Footer";
import SideBar from "./SideBar";
import Chart from "containers/Chart";

AdminPage.propTypes = {};

function AdminPage(props) {
  return <Chart />;
}

export default AdminPage;
