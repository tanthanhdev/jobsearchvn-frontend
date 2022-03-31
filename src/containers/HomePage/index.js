import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
// import PropTypes from 'prop-types'; ???
import "./homePage.css";
import Banner from "./Banner";
import TopCompanies from "./TopCompanies";
import Job from "./Job";
import Blog from "./Blog";
import { Wrap } from "components/wrap/Wrap";
import { Header } from "components/header/Header";
HomePage.propTypes = {};

function HomePage(props) {
  const [searchInput, setSearchInput] = useState("");

  const handleChangeInputSearch = (e) => {
    setSearchInput(e.target.value);
    console.log("e.target.value", e.target.value);
  };

  return (
    <div id="main">
      <Wrap>
        {/* <Header></Header> */}
        {/* banner */}

        <Banner onChange={handleChangeInputSearch}></Banner>
        <main className="grid main" style={{ paddingTop: "48px" }}>
          {/* Top jobs */}
          <TopCompanies></TopCompanies>
          <Job></Job>
          <Blog></Blog>
        </main>
        {/* Footer */}
      </Wrap>
    </div>
  );
}

export default HomePage;
