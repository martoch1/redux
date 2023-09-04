import React from 'react';

function Task({ task }) {
  return (
    <li>
      <span>{task.description}</span>
    </li>
  );
}

export default Task;
