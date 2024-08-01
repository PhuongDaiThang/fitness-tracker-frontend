import React, { useState } from 'react';
import '../styles/AddGoalForm.css';

function AddGoalForm({ addGoal }) {
    const [goal, setGoal] = useState({
        description: '',
        target: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGoal({ ...goal, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addGoal(goal);
        setGoal({ description: '', target: '' });
    };

    return (
        <form className="add-goal-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="description"
                value={goal.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <input
                type="number"
                name="target"
                value={goal.target}
                onChange={handleChange}
                placeholder="Target"
                required
            />
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default AddGoalForm;
