import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, NavLink, Switch } from 'react-router-dom';
import styled from "styled-components"
import {Button, Container} from 'reactstrap'
import {PrivateRoute} from './comps/privateRoute/'
import Login from './comps/login/'
import Home from './comps/home/'
import Firends from './comps/friendsList/'

class App extends React.Component {
  constructor(){
    super()
  }

  render(){
  return (
   
     <Container className="App">
      

      <nav className='nav'>
        <NavLink to="/login"><Button>CLICK TO LOGIN</Button></NavLink>
        <NavLink to="/protected"><Button>Protected Page</Button></NavLink>

      </nav>
      <Switch>
      <PrivateRoute exact path='/protected' component={Firends}/>
       <Route path='/login' component={Login} />
       <Route exact path='/' component={Home} />
      </Switch>

    </Container>
  );
}
}

export default App;