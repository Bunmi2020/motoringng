

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home';
function App() {
  return (
    <Router forceRefresh> 
      <Switch >
          
          <Route path="/" forceRefresh>
            <Home />
          </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
