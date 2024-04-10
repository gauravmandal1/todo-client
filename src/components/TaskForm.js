import React from 'react';
import '../styling/TaskForm.css';

const TaskForm = ({ task, onSubmit, onInputChange }) => {
  return (
    <form onSubmit={onSubmit} className="task-form">
      <h3>{task.id ? 'Update Task' : 'Create Task'}</h3>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter task title"
          value={task.title}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter task description"
          value={task.description}
          onChange={onInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={task.status} onChange={onInputChange}>
          <option value="todo">Todo</option>
          <option value="inProgress">In Progress</option>
          <option value="complete">Complete</option>
        </select>
      </div>
      <button type="submit" className="btn">
        {task.id ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;