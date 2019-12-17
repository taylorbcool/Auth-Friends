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

            <Link to="/login">Login</Link>

            <Link to="/protected">Friends</Link>

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