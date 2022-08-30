import React from "react";
import CoursePage from "../helpers/CoursePage.js";
import { MSTList } from "../components/MSTList.js";
import "../styles/MolloyStudentTour.css";

function MolloyStudentTour() {
  return (
    <CoursePage
      courseTitle="Molloy Student Tour"
      assignmentList={MSTList}
      headerStyle="mst-header"
      cellStyle="mst-cell"
    />
  );
}

export default MolloyStudentTour;
