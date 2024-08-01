import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ActivityList from './components/ActivityList';
import AddActivityForm from './components/AddActivityForm';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';
import LoginForm from './components/LoginForm';
import { fetchActivities, addActivity, fetchGoals, addGoal } from './api';

function App() {
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const activities = await fetchActivities();
        setActivities(activities);
        const goals = await fetchGoals();
        setGoals(goals);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    getData();
  }, []);

  const handleAddActivity = async (activity) => {
    try {
      const newActivity = await addActivity(activity);
      setActivities([...activities, newActivity]);
    } catch (error) {
      console.error('Error adding activity', error);
    }
  };

  const handleAddGoal = async (goal) => {
    try {
      const newGoal = await addGoal(goal);
      setGoals([...goals, newGoal]);
    } catch (error) {
      console.error('Error adding goal', error);
    }
  };

  const handleLogin = (credentials) => {
    // Implement login logic here
    setIsAuthenticated(true);
  };

  return (
      <div className="App">
        <Header />
        {isAuthenticated ? (
            <main className="main">
              <Dashboard />
              <ActivityList activities={activities} />
              <AddActivityForm addActivity={handleAddActivity} />
              <GoalList goals={goals} />
              <AddGoalForm addGoal={handleAddGoal} />
            </main>
        ) : (
            <LoginForm login={handleLogin} />
        )}
        <Footer />
      </div>
  );
}

export default App;
