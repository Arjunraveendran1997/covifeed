import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
        BrowserRouter as Router,
        Link,
        Switch,
        Route,
} from 'react-router-dom'

import Home from './Components/Home/Home';
import India from './Components/India/India';
import World from './Components/World/World';
import Header from './Components/Header/Header';
import Covid from './Components/Covid/Covid'

class App extends Component{
  

  render(){
    return(
      <div className="container-fluid">

        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/covid">
              <Covid/>
            </Route>
            <Route path="/india">
              <India/>
            </Route>
            <Route path="/world">
              <World/>
            </Route>
           
          </Switch>

        </Router>
       
      </div>
    )
  }
}

export default App;