import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import TopBar from "./topBar";
import Home from "./home";
import Director from "./components/director";
import History from "./history";
import Gallery from "./components/gallery";
import Management from "./components/management";
import Vision from "./components/vision";
import Footer from "./footer";
import AboutUs from "./components/aboutus";
function App() {
  return (
    <div className="App">
        
        <Router>
        <TopBar/>
        <Routes>
          <Route exact path ="/" element = {<Home/>}/>
          <Route path ="/aboutUs" element = {<AboutUs/>}/>
          <Route path ="/director" element = {<Director/>}/>
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
