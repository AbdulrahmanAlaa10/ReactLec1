import React, { Component } from 'react';
import "./App.css";

// Components
import Navbar from "./Navbar";
import About from './About';
import Contact from './Contact';
import Privacy from "./Privacy/Privacy";
import Footer from "./Footer/Footer";


class App extends Component {

  render() {
    return(

      <div  >
        <Navbar  name="abdulrahman" age="30" job="full stack" />
        <About />
        <Contact />
        <Privacy name="eslam" age="25" job="front end" />
        <Footer />






      







      </div>




    )
  }
}

export default App;










// without jsx 

// return React.createElement("div", null, React.createElement("h1", null, "We are a developers"));




