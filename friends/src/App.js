import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import FriendForm from './components/FriendForm'
import './App.css';

const App = () => {

  return(
    <Router>
      <div className="App">
        <div className='nav'>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Friends</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route path="/add-friend" component={FriendForm} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App