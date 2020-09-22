import React from 'react'
import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'
import Profile from './components/Profile'
import Matches from './components/Matches'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SwipeButtons from './components/SwipeButtons'

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/cards'>
            <Header />
            <Cards />
            {/* <SwipeButtons /> */}
          </Route>
          <Route path='/profile'>
            <Header />
            <Profile />
            {/* <SwipeButtons /> */}
          </Route>
          <Route path='/matches'>
            <Header />
            <Matches />
            {/* <SwipeButtons /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
