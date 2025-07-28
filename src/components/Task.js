import React from "react";

function Task({ task, text, category, onDelete }) {
  const taskText = task?.text || text;
  const taskCategory = task?.category || category;
  
  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={() => onDelete && onDelete(task)}>X</button>
    </div>
  );
}

export default Task;
