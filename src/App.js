import React , {Component} from 'react';
import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import './App.css';

import Home from './home';
import Message from './message';
import Contact from './contact'

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/message">Message</Link>
            </li>
          </ul>

          <switch>  
            <Route exact path ="/home"><Home /></Route>
            <Route exact path ="/contact"><Contact /></Route>
            <Route exact path ="/message"><Message /></Route>
          </switch>
          </div>
      </Router>
    )
  }
}
export default App;
