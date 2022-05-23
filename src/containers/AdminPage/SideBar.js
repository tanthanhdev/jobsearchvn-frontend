import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

SideBar.propTypes = {};

function SideBar(props) {
  return (
    <div className="shadow-xl h-20 fixed bottom-0 md:relative lg:relative xl:relative 2xl:relative md:h-screen lg:h-screen xl:h-screen 2xl:h-screen z-10 sm:w-full min-w-[200px] content-center">
      <div className="md:mt-16 lg:mt-16 xl:mt-16 min-w-[200px]  2xl:mt-16 md:w-48 lg:w-48 xl:w-48 2xl:w-48 md:fixed lg:fixed xl:fixed 2xl:fixed left-0 top-0 sm:content-center content-start text-left justify-between">
        <ul className="list-reset flex sm:flex-row flex-col pt-3 sm:py-[0] py-3 sm:px-1 px-2 sm:text-center text-left">
          <li className="mr-3 flex-1">
            <Link
              to="/admin/jobs"
              className="block sm:py-1 py-3 pl-1 align-middle  no-underline  border-b-2 border-gray-800 "
            >
              <i className="fas fa-tasks sm:pr-0 pr-3" />
              <span className="sm:pb-1 pb-0 sm:text-xs text-base sm:block inline-block">
                Thống kê bài tuyển dụng
              </span>
            </Link>
          </li>
          <li className="mr-3 flex-1">
            <Link
              to="/admin/users"
              className="block sm:py-1 py-3 pl-1 align-middle  no-underline  border-b-2 border-gray-800 "
            >
              <i className="fas fa-tasks sm:pr-0 pr-3" />
              <span className="sm:pb-1 pb-0 sm:text-xs text-base sm:block inline-block">
                Thống kê thành viên
              </span>
            </Link>
          </li>
          <li className="mr-3 flex-1">
            <Link
              to="/admin/submits"
              className="block sm:py-1 py-3 pl-1 align-middle  no-underline  border-b-2 border-gray-800 "
            >
              <i className="fas fa-tasks sm:pr-0 pr-3" />
              <span className="sm:pb-1 pb-0 sm:text-xs text-base sm:block inline-block">
                Thống kê lượt nộp CV
              </span>
            </Link>
          </li>
          <li className="mr-3 flex-1">
            <Link
              to="#"
              className="block sm:py-1 py-3 pl-1 align-middle  no-underline  border-b-2 border-gray-800 "
            >
              <i className="fas fa-tasks sm:pr-0 pr-3" />
              <span className="sm:pb-1 pb-0 sm:text-xs text-base sm:block inline-block">
                Thống kê lượt truy cập
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
