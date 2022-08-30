import React from "react";
import { Link } from "react-router-dom";

function CourseItem({ image, assignments, grade, coursePath }) {
  return (
    <Link to={coursePath}>
      <div className="courseItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {assignments} </h1>
        <p> {grade} </p>
      </div>
    </Link>
  );
}

export default CourseItem;
