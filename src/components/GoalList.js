import React from 'react';
import '../styles/GoalList.css'; // Adjust path if necessary

function GoalList({ goals }) {
    return (
        <div className="goal-list">
            {goals.map((goal, index) => (
                <div key={index} className="goal-item">
                    <span>{goal.name}</span>
                    <button>Complete</button>
                </div>
            ))}
        </div>
    );
}

export default GoalList;
