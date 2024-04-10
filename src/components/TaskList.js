import React from 'react';
import '../styling/TaskList.css';

const TaskList = ({ tasks, onEditTask }) => {
  return (
    <div className="task-list">
      <h3>Task List</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => onEditTask(task)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;