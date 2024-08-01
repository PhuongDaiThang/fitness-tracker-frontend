import React, { useState } from 'react';
import '../styles/AddActivityForm.css';

function AddActivityForm({ addActivity }) {
    const [activity, setActivity] = useState({
        date: '',
        type: '',
        duration: '',
        calories: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setActivity({ ...activity, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addActivity(activity);
        setActivity({ date: '', type: '', duration: '', calories: '' });
    };

    return (
        <form className="add-activity-form" onSubmit={handleSubmit}>
            <input
                type="date"
                name="date"
                value={activity.date}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="type"
                value={activity.type}
                onChange={handleChange}
                placeholder="Type"
                required
            />
            <input
                type="number"
                name="duration"
                value={activity.duration}
                onChange={handleChange}
                placeholder="Duration (mins)"
                required
            />
            <input
                type="number"
                name="calories"
                value={activity.calories}
                onChange={handleChange}
                placeholder="Calories"
                required
            />
            <button type="submit">Add Activity</button>
        </form>
    );
}

export default AddActivityForm;
