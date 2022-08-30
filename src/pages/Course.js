import React from "react";
import { CourseList } from "../helpers/CourseList";
import CourseItem from "../components/CourseItem";
import "../styles/Course.css";

function Course() {
  return (
    <div className="course">
      <h1 className="courseTitle">Courses</h1>
      <div className="courseList">
        {CourseList.map((courseItem, key) => {
          return (
            <CourseItem
              key={key}
              image={courseItem.image}
              assignments={courseItem.assignments}
              grade={courseItem.grade}
              coursePath={courseItem.coursePath}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Course;
