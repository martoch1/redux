import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/task';
function ListTask() {
  const tasks = useSelector((state) => state.tasks); // Access tasks from Redux state

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default ListTask;
