import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Artist from './pages/Artist';
import Search from './pages/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/artist/" component={Search} />
        <Route exact path="/artist/:slug" component={Artist} />
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
