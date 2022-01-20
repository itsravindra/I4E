import React from "react";  

import PageHeader from "./PageHeader";
import FallingBlocksBackground from "./FallingBlocksBackground";
import WorldMap from "./WorldMap";
import Introduction from "./Introduction";
import Mission from "./Mission";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import EDUAbacus from "./EDUAbacus";
import Products from "./Products";
import HelpWidget from "./HelpWidget";
import AppInfo from "./AppInfo";
import Footer from "./Footer";
import Copyright from "./Copyright"; 
import CountryEconomy from "./CountryEconomy";
import CountryWeather from "./CountryWeather";
import CountryEduCost from "./CountryEduCost";
import CountrylivingCost from "./CountrylivingCost";
import CountryBanner from "./CountryBanner";
class StudyInCanada extends React.Component {
  constructor(props : any) {
    super(props);
  }
  render() {
    return (
      <div>
      {/* <FallingBlocksBackground> */}

      {/* <WorldMap></WorldMap> */}
      {/* <Introduction></Introduction> */}
      {/* </FallingBlocksBackground> */}
      
      <CountryBanner></CountryBanner>
      <CountryEconomy></CountryEconomy>
      <CountryWeather></CountryWeather>
      <CountryEduCost></CountryEduCost>
      <CountrylivingCost></CountrylivingCost>
      <Products></Products>
      <EDUAbacus></EDUAbacus>
      <HelpWidget></HelpWidget>
      <AppInfo></AppInfo>
      <Footer></Footer>
      <Copyright></Copyright>
      </div>
    );
  }
}
  
export default StudyInCanada;