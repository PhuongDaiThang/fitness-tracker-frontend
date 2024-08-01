import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchActivities = async () => {
    try {
        const response = await axios.get(`${API_URL}/activities`);
        return response.data;
    } catch (error) {
        console.error('Error fetching activities', error);
        throw error;
    }
};

export const addActivity = async (activity) => {
    try {
        const response = await axios.post(`${API_URL}/activities`, activity);
        return response.data;
    } catch (error) {
        console.error('Error adding activity', error);
        throw error;
    }
};

export const fetchGoals = async () => {
    try {
        const response = await axios.get(`${API_URL}/goals`);
        return response.data;
    } catch (error) {
        console.error('Error fetching goals', error);
        throw error;
    }
};

export const addGoal = async (goal) => {
    try {
        const response = await axios.post(`${API_URL}/goals`, goal);
        return response.data;
    } catch (error) {
        console.error('Error adding goal', error);
        throw error;
    }
};
