import React, { useState } from 'react';

const CategoryFilter = ({ categories, onFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleClick = (category) => {
        setSelectedCategory(category);
        onFilter(category);
    }

    return (
        <div>
            {categories.map((category, index) => (
                <button key={index} className={category === selectedCategory ? 'selected' : ''} onClick={() => handleClick(category)}>
                    {category}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter;
