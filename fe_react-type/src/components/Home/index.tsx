import React from 'react'
import Banner from './components/Banner'
import ListBlogs from './components/LisstBlogs'
import ListJobs from './components/ListJobs'
import TopEmployer from './components/TopEmployer'


const Home = () => {
  return (
    <React.Fragment>
        <Banner></Banner>
        <div className="grid main">
          <TopEmployer></TopEmployer>
          <ListJobs></ListJobs>
          <ListBlogs></ListBlogs>
        </div>
    </React.Fragment>
  )
}

export default Home