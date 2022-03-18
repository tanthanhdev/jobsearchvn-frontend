import React, { useRef, useState } from 'react';
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
  const [searchInput, setSearchInput] = useState('')

  const handleChangeInputSearch=(e)=>{
    setSearchInput(e.target.value)
    console.log("e.target.value",e.target.value);
  }
  return (
    <div id="main">
      <Wrap>
      {/* Header */}
      {/* banner */}
      <Banner onChange={handleChangeInputSearch}></Banner>
      <main className="grid main">
        {/* Top jobs */}
        <TopJobs></TopJobs>
        <Job inputSearch={searchInput}></Job>
        <Blog></Blog>
      </main>
      {/* Footer */}
      </Wrap>
      
    </div>

  );
}

export default HomePage;