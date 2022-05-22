import React, { useState } from "react";

import { CVView } from "./components/CVView";

// import authService from "services/auth.service";

// import styles from "./style.module.css";
// import { icons } from "utils/icons";

const NotModalBasic1 = ({Cv}) => {

  return (
    <CVView
      Cv={Cv}
    />
  );
};
export default NotModalBasic1;
