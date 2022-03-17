import React from 'react';
import PropTypes from 'prop-types';
import './homePage.css'
import Banner from './Banner';
import TopJobs from './TopJobs';
import Job from './Job';
import Blog from './Blog';
import { Wrap } from 'components/wrap/Wrap';
HomePage.propTypes = {
  
};

function HomePage(props) {
  return (
    <div id="main">
      <Wrap>
      {/* Header */}
      {/* banner */}
      <Banner></Banner>
      <main className="grid main">
        {/* Top jobs */}
        <TopJobs></TopJobs>
        <Job></Job>
        <Blog></Blog>
      </main>
      {/* Footer */}
      </Wrap>
      
    </div>

  );
}

export default HomePage;