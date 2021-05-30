import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Prayerlist from './components/pages/Prayerlist'
import Bible from './components/pages/Bible'



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path='/prayerlist' component = {Prayerlist}/>
          <Route path='/bible' component = {Bible}/>
        </Switch>

      </Router>
    </>
  );
}

export default App;
