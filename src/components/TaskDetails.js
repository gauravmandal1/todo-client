import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import {getTasks,createTask,updateTask} from './apiCalls'

import '../styling/TaskDetails.css';

const TaskDetails = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'todo' });
  const [editingTask, setEditingTask] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
        const tasks = await getTasks();
        setTasks(tasks.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await createTask(newTask)
      setTasks([...tasks, response.data]);
      setNewTask({ title: '', description: '', status: 'todo' });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await updateTask(editingTask.id,editingTask)
      setTasks(tasks.map((task) => (task.id === editingTask.id ? response.data : task)));
      setEditingTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingTask) {
      setEditingTask({ ...editingTask, [name]: value });
    } else {
      setNewTask({ ...newTask, [name]: value });
    }
  };

  const filterTasks = (filter) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.status === filter);
      setFilteredTasks(filtered);
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <div>
        <TaskFilter filterTasks={filterTasks} activeFilter={activeFilter} />
        <TaskForm
            task={editingTask || newTask}
            onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
            onInputChange={handleInputChange}
            />
        <TaskList tasks={filteredTasks} onEditTask={handleEditTask} />
        </div>
    </div>
  );
};

export default TaskDetails;