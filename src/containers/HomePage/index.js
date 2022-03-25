import React from 'react';
// import PropTypes from 'prop-types'; ???
import './homePage.css'
import Banner from './Banner';
import TopCompanies from './TopCompanies';
import Job from './Job';
import Blog from './Blog';
import { Wrap } from 'components/wrap/Wrap';
HomePage.propTypes = {
  
};

function HomePage() {
  return (
    <div id="main">
      <Wrap>
      {/* Header */}
      {/* banner */}
      <Banner></Banner>
      <main className="grid main" style={{paddingTop: "48px"}}>
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