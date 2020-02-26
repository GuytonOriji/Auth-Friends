
import React from 'react';
import{ Route, NavLink, Switch} from 'react-router-dom'
import Login from './comps/login/'
import Friends from './comps/friendsList/'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
  }

  render(){
  return (
   
    <div className="App">
      <h1>friends</h1>
      <ul>
        <li>
          <NavLink to = "/login">Login</NavLink>
        </li>
        <li>
          <NavLink to = "/protected">Protected Page</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path = '/protected' component ={Friends} />
        <Route path = '/login' component = {Login} />
        <Route component ={Login} />

      </Switch>

    </div>
    
  );
}
}

export default App;