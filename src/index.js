import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import CSS toàn cục
import App from './App'; // Import thành phần gốc của ứng dụng

// Render ứng dụng vào phần tử HTML có id là 'root'
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
