import React from "react";
import CoursePage from "../helpers/CoursePage.js";
import { CapstoneList } from "../components/CapstoneList.js";
import "../styles/Capstone.css";

function Capstone() {
  return (
    <CoursePage
      courseTitle="Capstone Seminar"
      assignmentList={CapstoneList}
      headerStyle="capstone-header"
      cellStyle="capstone-cell"
    />
  );
}

export default Capstone;
