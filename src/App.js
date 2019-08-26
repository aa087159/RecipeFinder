import React from 'react';
import './Styles/main.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/layout/Nav'
import Index from './components/layout/Index'
import { Provider } from './Context'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          
            <Nav />
            <Switch>
              <Route exact path="/" component={Index}/>
            </Switch>
          
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
