import React from 'react';
import '../styles/Dashboard.css';
import { Chart } from 'react-charts';

function Dashboard() {
    const data = [
        { label: 'Run', data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]] },
        { label: 'Bike', data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]] },
    ];

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <Chart data={data} />
        </div>
    );
}

export default Dashboard;
