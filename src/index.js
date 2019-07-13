
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './home-page/home-page';
import About from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />      
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects}/>      
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))