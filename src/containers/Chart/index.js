import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BarChart from "./BarChart";
import DropDown from "./DropDown";
import jobApi from "api/jobApi";
import { useSelector } from "react-redux";
import { Wrap } from "components/wrap/Wrap";

Chart.propTypes = {};

function Chart(props) {
  const [jobsInYear, setJobsInYear] = useState([]);
  const [isChose, setIsChose] = useState(1);
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  const year = useSelector((state) => state.year);
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
    setData({
      labels: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
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
            <BarChart chartData={data} />
          </div>
          <DropDown />
        </div>
      </div>
    </Wrap>
  );
}

export default Chart;
