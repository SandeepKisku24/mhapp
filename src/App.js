import React from "react";
import { MantineProvider } from '@mantine/core';
import "./App.css"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import DetailsBar from "./detialsBar";
import TopBar from "./topBar";
import  FooterLinks from "./footer";

import ImageSection from "./gall";
import Service from "./service";
import Facility from "./facilities";

import Home from "./home";



import Announce from "./announcement";

import Director from "./components/director";
import History from "./history";
import Gallery from "./components/gallery";
import Management from "./components/management";
import Vision from "./components/vision";
import AboutUs from "./components/aboutus";
import Gallery1 from "./events/gallery";
// import ImageSection from "./gall";

import Faq from "./faq";
import AnnounceAll from "./announcementAll";

// departments
import Dental from "./components/departments/dental";
import Dietetic from "./components/departments/dietetic";
import Emergency from "./components/departments/emergency";
import FamilyMed from "./components/departments/familymed";
import GeneralMed from "./components/departments/generalmed";
import ICU from "./components/departments/icu";
import IPD from "./components/departments/ipd";
import OPD from "./components/departments/opd";
import Ophthal from "./components/departments/ophthal";
import Orthopedic from "./components/departments/orthopedic";
import OT from "./components/departments/ot";

// doctors

import DrAlpana from "./components/doctors/dralpana";
import DrArun from "./components/doctors/drarun";
import DrBetsy from "./components/doctors/drbetsy";
import DrDileep from "./components/doctors/drdileep";
import DrRebin from "./components/doctors/drrebin";
import DrShetty from "./components/doctors/drshetty";
import DrTara from "./components/doctors/drtara";
import DtPriti from "./components/doctors/dtpriti";

// serivice
import Ambulance from "./components/service/ambulance";
import Community from "./components/service/community";
import Dietary from "./components/service/dietary";
import Lab from "./components/service/lab";
import Pastoral from "./components/service/pastoral";
import Pharmacy from "./components/service/pharmacy";
import Xray from "./components/service/xray";
import ECG from "./components/service/ecg";


// info
import AdmissionInfo from "./components/information/admissioninfo";
import Campaigns from "./components/information/campaignsMH";
import GeneralInfo from "./components/information/generalinfo";
import Holidays from "./components/information/holidays";
import IpdInfo from "./components/information/ipd";
import RightsAndRes from "./components/information/rightandres";
import Visitor from "./components/information/visitor";
import DepartmentsAll from "./departmentsAll";
import Bottombar from "./bottombar";

import { ScrollRestoration } from "react-router-dom";
import ScrollToTop from "./scrollToTop";


function App() {
  return (
    <MantineProvider>
      <div className="App">
        
        <Router  basename="/mhapp >
        <ScrollToTop/>
        <DetailsBar/>
        <TopBar/>
        <Routes>
          <Route exact path ="/" element = {<Home/>}/>
          <Route exact path ="/mhapp" element = {<Home/>}/>
          <Route  path ="/announce" element = {<Announce number = "0"/>}/>
          <Route path ="/service" element = {<Service/>}/>
          <Route path ="/department" element = {<DepartmentsAll/>}/>
          <Route path ="/facility" element = {<Facility/>}/>
          <Route path ="/faq" element = {<Faq/>}/>
          <Route path ="/annouceAll" element = {<AnnounceAll/>}/>


          <Route path ="/aboutUs" element = {<AboutUs/>}/>
          <Route path ="/director" element = {<Director/>}/>
          <Route path ="/history" element = {<History/>}/>
          <Route path ="/vision" element = {<Vision/>}/>
          <Route path ="/management" element = {<Management/>}/>
          <Route path ="/gall" element = {<ImageSection/>}/>

          <Route path ="/gallery" element = {<Gallery1/>}/>
          

          <Route path ="/department/dental" element = {<Dental/>}/>
          <Route path ="/department/dietetic" element = {<Dietetic/>}/>
          <Route path ="/department/emergency" element = {<Emergency/>}/>
          <Route path ="/department/famililymedicine" element = {<FamilyMed/>}/>
          <Route path ="/department/generalmedicine" element = {<GeneralMed/>}/>
          <Route path ="/department/icu" element = {<ICU/>}/>
          <Route path ="/department/ipd" element = {<IPD/>}/>
          <Route path ="/department/opd" element = {<OPD/>}/>
          <Route path ="/department/opthal" element = {<Ophthal/>}/>
          <Route path ="/department/orthopedic" element = {<Orthopedic/>}/>
          <Route path ="/department/ot" element = {<OT/>}/>


          <Route path ="/doctor/dralpana" element = {<DrAlpana/>}/>
          <Route path ="/doctor/drarun" element = {<DrArun/>}/>
          <Route path ="/doctor/drbetsy" element = {<DrBetsy/>}/>
          <Route path ="/doctor/drdileep" element = {<DrDileep/>}/>
          <Route path ="/doctor/drrebin" element = {<DrRebin/>}/>
          <Route path ="/doctor/drshetty" element = {<DrShetty/>}/>
          <Route path ="/doctor/drtara" element = {<DrTara/>}/>
          <Route path ="/doctor/dtpriti" element = {<DtPriti/>}/>


          {/* service */}
          <Route path ="/service/ambulance" element = {<Ambulance/>}/>
          <Route path ="/service/community" element = {<Community/>}/>
          <Route path ="/service/Dietary" element = {<Dietary/>}/>
          <Route path ="/service/lab" element = {<Lab/>}/>
          <Route path ="/service/pastoral" element = {<Pastoral/>}/>
          <Route path ="/service/pharmacy" element = {<Pharmacy/>}/>
          <Route path ="/service/xray" element = {<Xray/>}/>
          <Route path ="/service/ecg" element = {<ECG/>}/>

          
          <Route path ="/info/admission" element = {<AdmissionInfo/>}/>
          <Route path ="/info/campaigns" element = {<Campaigns/>}/>
          <Route path ="/info/generalinfo" element = {<GeneralInfo/>}/>
          <Route path ="/info/holidays" element = {<Holidays/>}/>
          <Route path ="/info/ipdinfo" element = {<IpdInfo/>}/>
          <Route path ="/info/rightsandresponsibilities" element = {<RightsAndRes/>}/>
          <Route path ="/info/visitorhours" element = {<Visitor/>}/>
      
          




        </Routes>
        <FooterLinks/>
        <Bottombar/>
        
      </Router>
    </div>
    
  </MantineProvider>
  );
}

export default App;
