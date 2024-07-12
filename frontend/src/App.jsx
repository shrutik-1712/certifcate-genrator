import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      
        <Route path="/" exact component={AdminDashboard} />
      
    </Router>
  );
}

export default App;