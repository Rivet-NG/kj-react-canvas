import React from "react";
import CoursePage from "../helpers/CoursePage.js";
import { AccountingList } from "../components/AccountingList.js";
import "../styles/Accounting.css";

function Accounting() {
  return (
    <CoursePage
      courseTitle="Accounting Proficiency"
      assignmentList={AccountingList}
      headerStyle="accounting-header"
      cellStyle="accounting-cell"
    />
  );
}

export default Accounting;
