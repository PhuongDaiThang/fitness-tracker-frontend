import React from 'react';
import '../styles/ActivityList.css';


function ActivityList({ activities }) {
    return (
        <div className="activity-list">
            <h2>Activities</h2>
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id}>
                        <span>{activity.date}</span>
                        <span>{activity.type}</span>
                        <span>{activity.duration} mins</span>
                        <span>{activity.calories} kcal</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ActivityList;
