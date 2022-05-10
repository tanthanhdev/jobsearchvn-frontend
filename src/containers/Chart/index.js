import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DropDown from "./DropDown";
import jobApi from "api/jobApi";
import userApi from "api/userApi";
import { useSelector } from "react-redux";
import { Wrap } from "components/wrap/Wrap";
import Jobs from "./Jobs";
import User from "./Users";
import { Link, Route, Routes } from "react-router-dom";
import Views from "./Views";

Chart.propTypes = {};

function Chart(props) {
  const [jobsInYear, setJobsInYear] = useState([]);
  const [usersInYear, setUserInYear] = useState([]);
  const [employerInYear, setEmployersInYear] = useState([]);
  const [memberInYears, setMemberInYear] = useState([]);

  const [isChose, setIsChose] = useState(1);
  const [dataJobs, setDataJobs] = useState({
    labels: [],
    datasets: [],
  });
  const [dataUsers, setDataUsers] = useState({
    labels: [],
    datasets: [],
  });
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = useSelector((state) => state.year);
  //jobs
  useEffect(() => {
    const fetchProducts = async () => {
      const jobs = await jobApi.getAll();
      setJobsInYear(
        jobs.filter(
          (job) => Number(job.created_at.slice(0, 4)) === Number(year)
        )
      );
      console.log("jobs", jobs);
    };
    fetchProducts();
  }, [year]);
  useEffect(() => {
    const fetchProducts = async () => {
      const users = await userApi.getAll();
      setUserInYear(
        users.filter(
          (user) => Number(user.date_joined.slice(0, 4)) === Number(year)
        )
      );
      setEmployersInYear(
        users.filter(
          (user) =>
            Number(user.date_joined.slice(0, 4)) === Number(year) &&
            user.is_staff === true
        )
      );
      setMemberInYear(
        users.filter(
          (user) =>
            Number(user.date_joined.slice(0, 4)) === Number(year) &&
            user.is_staff === false
        )
      );
    };

    fetchProducts();
  }, [year]);
  console.log("userInyears", usersInYear);
  useEffect(() => {
    setDataJobs({
      labels: labels,
      datasets: [
        {
          label: "Tổng: " + jobsInYear.length,
          data: [
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "01")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "02")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "03")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "04")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "05")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "06")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "07")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "08")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "09")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "10")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "11")
              .length,
            jobsInYear?.filter((item) => item.created_at.slice(5, 7) === "12")
              .length,
          ],
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [jobsInYear]);
  //users
  useEffect(() => {
    setDataUsers({
      labels: labels,
      datasets: [
        {
          label: "Total: " + usersInYear.length,
          data: [
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "01")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "02")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "03")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "04")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "05")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "06")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "07")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "08")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "09")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "10")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "11")
              .length,
            usersInYear?.filter((item) => item.date_joined.slice(5, 7) === "12")
              .length,
          ],
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "green",
          borderWidth: 2,
        },
        {
          label: "Employers: " + employerInYear.length,
          data: [
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "01"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "02"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "03"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "04"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "05"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "06"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "07"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "08"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "09"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "10"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "11"
            ).length,
            employerInYear?.filter(
              (item) => item.date_joined.slice(5, 7) === "12"
            ).length,
          ],
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "yellow",
          borderWidth: 2,
        },
        {
          label: "Member " + memberInYears.length,
          data: [
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "01"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "02"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "03"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "04"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "05"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "06"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "07"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "08"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "09"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "10"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "11"
            ).length,
            memberInYears?.filter(
              (item) => item.date_joined.slice(5, 7) === "12"
            ).length,
          ],
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "pink",
          borderWidth: 2,
        },
      ],
    });
  }, [usersInYear, employerInYear, memberInYears]);
  return (
    <Wrap>
      <div className="flex container md:block sm:block">
        <div className="basis-1/4 pt-[100px] flex lg:items-center xl:items-center 2xl:items-center">
          <ul className="bg-backgroundBtn rounded-md">
            <li
              onClick={() => setIsChose(1)}
              className={`${
                isChose === 1 ? "text-primari" : false
              }  text-center cursor-pointer py-4 px-2`}
            >
              Thống kê bài tuyển dụng
            </li>
            <li
              onClick={() => setIsChose(2)}
              className={`${
                isChose === 2 ? "text-primari" : false
              }  text-center cursor-pointer py-4 px-2`}
            >
              Thống kê thành viên
            </li>
            <li
              onClick={() => setIsChose(3)}
              className={`${
                isChose === 3 ? "text-primari" : false
              }  text-center cursor-pointer py-4 px-2`}
            >
              Thống kê lượt truy cập
            </li>
          </ul>
        </div>
        <div className="basis-3/4 pt-[100px]">
          <div style={{ width: 700 }}>
            {isChose === 1 && <Jobs chartData={dataJobs} />}
            {isChose === 2 && <User chartData={dataUsers} />}
            {isChose === 3 && <Views chartData={dataUsers} />}
          </div>
          <DropDown />
        </div>
      </div>
    </Wrap>
  );
}

export default Chart;
