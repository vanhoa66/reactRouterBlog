import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Title from './Title'
import Navigation from './Navigation'
import Footer from './Footer'
import Homepage from './../pages/Homepage'
import Blogpage from './../pages/Blogpage'
import Aboutpage from './../pages/Aboutpage'
import Contactpage from './../pages/Contactpage'
import Notfoundpage from './../pages/Notfoundpage'

const routes = [
  { 
      path: '/',
      exact: true,
      main: () => <Homepage />
  },
  { 
      path: '/about',
      exact: true,
      main: () => <Aboutpage />
  },
  { 
      path: '/blog',
      exact: true,
      main: () => <Blogpage />
  },
  { 
      path: '/contact',
      exact: true,
      main: () => <Contactpage  />
  },
  { 
    path: '',
    exact: true,
    main: () => <Notfoundpage  />
}
];

class App extends Component {
  showRoute(routes){
    let xhtml = null;
    
    if(routes.length > 0 ){
        xhtml = routes.map((route, index)=> {
            return (
                <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
            );
        });
    }

    return <Switch>{xhtml}</Switch>;
}
  render() {
    return (
      <Router>
        <div  className="App">
          <Title />
          <Navigation />
          <div className="container">
          {this.showRoute(routes)}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
