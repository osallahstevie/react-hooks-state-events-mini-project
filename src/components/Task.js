import React from 'react';

const Task = ({ task, onDelete }) => {
    return (
        <div>
            <div>{task.text}</div>
            <div>{task.category}</div>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    )
}

export default Task;
