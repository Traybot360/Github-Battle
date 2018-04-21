import React from 'react';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav/>
          <Switch>          
            <Route path="/" exact component={Home}/>
            <Route path="/battle" exact component={Battle}/>
            <Route path="/battle/results"  component={Results} />
            <Route path="/popular" component={Popular} />
            <Route render={function(){
              return <p>Not Found!</p>
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;