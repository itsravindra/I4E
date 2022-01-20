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
class Home extends React.Component {
  constructor(props : any) {
    super(props);
  }
  render() {
    return (
      <div>
      {/* <FallingBlocksBackground> */}

      <WorldMap></WorldMap>
      <Introduction></Introduction>
      {/* </FallingBlocksBackground> */}
      
    
      <Mission></Mission>
      <WhoWeAre></WhoWeAre>
      <WhatWeDo></WhatWeDo>
      <EDUAbacus></EDUAbacus>
      <Products></Products>
      <HelpWidget></HelpWidget>
      <AppInfo></AppInfo>
      <Footer></Footer>
      <Copyright></Copyright>
      </div>
    );
  }
}
  
export default Home;