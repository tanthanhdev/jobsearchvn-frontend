import React from 'react';
import PropTypes from 'prop-types';

Blog.propTypes = {
  
};

function Blog(props) {
  return (
    <div className="sub__nav-content grid wide">
      <header>
        <h2>Blog Hấp Dẫn</h2>
        <span style={{collor: 'var(--primary-collor)', cursor: 'pointer', fontSize: '1.2rem'}}>Xem tất cả</span>
      </header>
      <div className="sub__nav-content-list">
        <div className="sub__nav-content-item sub__nav-content-active roww">
          <a className="sub__nav-content-link coll l-6 c-12 " href="#">
            <img src="./assets/img/employer/lam-viec-tai-nha-blog-thumbnail-200x105 1.png" className="sub__nav-content-img" alt="han che khi lam viec tai nha" />
            <div className="sub__nav-content-link-content">
              <h3>Những lợi ích và Hạn chế khi IT Developer làm việc tại nhà
              </h3>
              <p>
                Từ khi dịch Covid-19 bùng phát, chúng ta đã khám phá ra hình thức làm việc tại nhà
                mà không cần sự tiếp xúc trực...
              </p>
              <span style={{collor: 'var(--primary-collor)'}}>Xem thêm</span>
            </div>
          </a>   
        </div>
      </div>
    </div>
  );
}

export default Blog;