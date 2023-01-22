import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
    const [text, setText] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onTaskFormSubmit({ text, category });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Task text" />
            <select value={category} onChange={e => setCategory(e.target.value)}>
                {categories.map((category, index) => {
                    return <option key={index} value={category}>{category}</option>
                })}
            </select>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default NewTaskForm;
