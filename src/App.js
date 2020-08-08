import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route
          path='/dashboard'
          exact={true}
          component={Dashboard}
        />
      </div>
    </Router>
  );
}

export default App;
