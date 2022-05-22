import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import memberApi from "api/memberApi";

function GetMember(props) {
  const [memberCurrent, setMemberCurrent] = useState({});
  //chong rerender vo han
  useEffect(() => {
    memberApi.getMember().then((response) => {
      setMemberCurrent(response);
    });
  }, []);

  return <div></div>;
}
GetMember.propTypes = {};
export default GetMember;
