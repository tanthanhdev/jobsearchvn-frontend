import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setYear } from "./ChartSlice";

DropDown.propTypes = {};

function DropDown(props) {
  const [value, setValue] = useState(2022);

  const year = useSelector((state) => state.year);
  console.log("year", year);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    // setValue(event.target.value);
    dispatch(setYear(event.target.value));
  };
  return (
    <label>
      Năm
      <select value={year} onChange={handleChange}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </label>
  );
}

export default DropDown;
