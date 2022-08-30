import React from "react";
import CoursePage from "../helpers/CoursePage.js";
import { ColorList } from "../components/ColorList.js";
import "../styles/ColorTheory.css";

function ColorTheory() {
  return (
    <CoursePage
      courseTitle="Color Theory"
      assignmentList={ColorList}
      headerStyle="color-header"
      cellStyle="color-cell"
    />
  );
}

export default ColorTheory;
