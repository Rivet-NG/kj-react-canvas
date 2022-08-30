import React from "react";
import CoursePage from "../helpers/CoursePage.js";
import { TattooList } from "../components/TattooList.js";
import "../styles/TattooHistory.css";

function TattooHistory() {
  return (
    <CoursePage
      courseTitle="History and Social Meaning of Tattoos and Body Art"
      assignmentList={TattooList}
      headerStyle="tattoo-header"
      cellStyle="tattoo-cell"
    />
  );
}

export default TattooHistory;
