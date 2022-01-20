import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Quote from "./Quote";
import UserAvatar from "./UserAvatar";
import WhoWeAreImage from '../images/who_we_are.png';
import profileImage from '../images/testimonial/feature-testimonial-thumb_2.jpg';


class WhoWeAre extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="m-5 p-3">
      {/* <Container fluid="md" className="m-5 p-3 who-we-are-cont"> */}
        <div className="container cont1">
          <Row>
            <Col className="col-sm-6 ml-auto justify-content-center d-flex align-items-center">
              <Row>
                <h2 className="feature-head">Who we are ?</h2>
                <p className="feature-intro">A team of enthusiasts with decades of expertise in financial, educational and technical services. Worked in some of India’s finest organization and global MNC’s our team is well equipped with domain knowledge and expertise. We are determined to bring the pivotal change in the latent need of education planning which is the foundation to a bright future.</p>
                <Quote quote=" Education is the passport to the future and our mission is to empower every individual to plan financially the future they deserve. "></Quote>
                <UserAvatar src={profileImage} designation="Tushar Bopche, Co-Founder &amp; Director"></UserAvatar>
              </Row>
            </Col>
            <Col className="col-sm-6 ml-auto justify-content-center d-flex align-items-center">
              <img className="img-fluid" src={WhoWeAreImage} data-aos="fade-left" />
            </Col>
          </Row>
        </div>
      {/* </Container> */}
      </div>
    );
  }
}

export default WhoWeAre;