import React from "react";
import TimerPlugin from "./TimerPlugin.js";
import NotifPlugin from "./NotifPlugin.js";

function CoursePage({ courseTitle, assignmentList, headerStyle, cellStyle }) {
  return (
    <div>
      <h1 className={headerStyle}>{courseTitle}</h1>
      <div style={{ margin: "20px 0" }}>
        {assignmentList.map(({ assignmentTitle, dueDate }, index) => {
          return (
            <div key={index} className={cellStyle}>
              <h2 style={{ margin: 0 }}>{assignmentTitle}</h2>
              <p style={{ margin: 0 }}>
                <strong>Due Date:</strong> {new Date(dueDate).toDateString()},{" "}
                {new Date(dueDate).toLocaleTimeString()} |{" "}
                <NotifPlugin message={TimerPlugin(assignmentList, index)} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoursePage;
