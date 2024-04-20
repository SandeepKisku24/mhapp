import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import TopBar from "./topBar";
import Home from "./home";
import History from "./history";
import Gallery from "./gallery";
import Management from "./management";
import Vision from "./vision";
import Footer from "./footer";
function App() {
  return (
    <div className="App">
        
        <Router>
        <TopBar/>
        <Routes>
          <Route exact path ="/" element = {<Home/>}/>
          <Route path ="/history" element = {<History/>}/>
          <Route path ="/vision" element = {<Vision/>}/>
          <Route path ="/management" element = {<Management/>}/>
          <Route path ="/gallery" element = {<Gallery/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
