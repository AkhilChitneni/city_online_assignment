import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Header from './components/header'
// import Footer from './components/footer'
// import About from './components/about'
// import Service from './components/service'
import MovieInof from './components/MovieInfo/MovieInof'
import HomeScreen from './components/HomeScreen/HomeScreen'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Routing = () => {
  return(
    <Router>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/movie/:id" component={MovieInof} />
        {/* <Route path="/about" component={About} />
        <Route path="/service" component={Service} /> */}
      </Switch>
      {/* <Footer/> */}
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);