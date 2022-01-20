import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import whatWeDoImage from '../images/what_we_do.png';


class WhatWeDo extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="m-5 p-3">
        {/* <Container fluid="md" className="m-5 p-3 what-we-do-cont"> */}
        <div className="container cont1">
          <Row>
            <Col className="col-sm-6 ml-auto justify-content-center d-flex align-items-center">
              <img className="img-fluid" src={whatWeDoImage} data-aos="fade-right" />
            </Col>

            <Col className="col-sm-6 ml-auto justify-content-center d-flex align-items-center">
              <Row>
                <h2 className="feature-head">What we do ?</h2>
                <p className="feature-intro">Unlike popular traditional companies focusing only on investment and returns, we are solution centric for the unforeseen needs, and holistic expenditure of career building education expenses. Right from the discovery journey of education destination, analyzing cost, comparing finance options to making an informed choice, we would be a partner at every step with our quick and simple easy to use technology backed by expertise and intelligence. We are excited to present a one stop shop which intuitively provides  the cost of turning your child’s dream into reality through valuable information, assessment , statistics and investments.</p>
              </Row>
            </Col>
          </Row>
        </div>
        {/* </Container> */}
      </div>
    );
  }
}

export default WhatWeDo;