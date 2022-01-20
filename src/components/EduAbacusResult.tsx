import React from "react";  

import Products from "./Products";
import HelpWidget from "./HelpWidget";
import AppInfo from "./AppInfo";
import Footer from "./Footer";
import Copyright from "./Copyright"; 
import AbacusCalResult from "./AbacusCalResult";

class EduAbacusResult extends React.Component {
  constructor(props : any) {
    super(props);
  }
  render() {
    return (
      <div>
          
    <AbacusCalResult></AbacusCalResult>     
      <Products></Products>
      <HelpWidget></HelpWidget>
      <AppInfo></AppInfo>
      <Footer></Footer>
      <Copyright></Copyright>
      </div>
    );
  }
}
  
export default EduAbacusResult;