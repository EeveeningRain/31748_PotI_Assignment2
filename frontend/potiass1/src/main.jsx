import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import ExpenseTrackerApp from './ExpenseTrackerApp';
import React from 'react';

// ReactDOM.createRoot(document.getElementById("root")).render(<ExpenseTrackerApp />);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem('user');
  console.log('user =', user);
  return !user ? <Navigate to="/login" replace /> : children;
};

const ProtectedLoginRoute = ({ children }) => {
  const user = sessionStorage.getItem('user');
  console.log('user =', user);
  return user ? <Navigate to="/" replace /> : children;
}

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><ExpenseTrackerApp /></ProtectedRoute>} />
        <Route path="/login" element={<ProtectedLoginRoute><Login /></ProtectedLoginRoute>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}