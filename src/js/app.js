import React, {Component} from 'react';
import {render} from 'react-dom';
import {hasHistory, browserHistory, Router, Route, Link } from 'react-router';

import '../css/styles.css';

import Home from '../components/Home/home';
import About from '../components/About/about';

const goals = ['The initial goal', 'Another silly life goal'];

class Main extends Component {
  render () {
  	return(
  		<div>
         <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link> </li>
    </ul>
    <div>
                    
                    {this.props.children}
                </div>
                </div>
  		)
  }
}

let routes = (
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home} data={goals}/>
      <Route path="/about" component={About} data={goals} />
    </Route>
		
  </Router>
);

render(
  routes,
  document.getElementById('app')
);
