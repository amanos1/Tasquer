import React from "react";

const Task = ({ task }) => {
  return (
    <div className="tasque">
      <p className="tasqueName">{task.getTop()}</p>
      <footer className="tasqueDate">{task.getBottom()}</footer>
    </div>
  );
};

export default Task;
