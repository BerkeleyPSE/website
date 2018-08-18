import React from 'react';

// node modules
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Routes from './Routes';

const App = () => (
  <Router>
    <Route component={Routes} />
  </Router>
);

export default App;
