import React, { useState, useEffect } from 'react';
import Navbar from '../components/nav-bar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Home from './pages/home';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Test from './pages/test';
import About from './pages/about';



library.add(faPalette, faTimes, faBars);



export default function App() {
 
  const [data, SetData] = useState([{}])

    useEffect(() => {
      fetch("https://capstone2-backend.herokuapp.com/pix/get").then(
          res => res.json()
      ).then(
          data => {
            SetData(data)
            console.log(data)
          }
      )
    }, [])

  
  return (
        
    <Router>
      <div className="nav-bar-wrap">
        <Navbar />
      </div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/test' component={Test} />
        <Route path='/about' component={About} />

      </Switch>
    </Router>
      
  );
  
}
