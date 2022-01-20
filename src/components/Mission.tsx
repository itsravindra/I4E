import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Quote from "./Quote";
import UserAvatar from "./UserAvatar";
import missionImage from '../images/mission.png';
import profileImage from '../images/testimonial/feature-testimonial-thumb.jpg';


class Mission extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      
      <div  className="m-5 p-3">
        {/* <Container fluid="md" className="m-5 p-3 mission-cont"> */}
        <div className="container">
          <Row>
            <Col className="col-sm-6 ml-auto justify-content-center d-flex align-items-center">
              <img className="img-fluid" src={missionImage} data-aos="fade-right" />
            </Col>

            <Col className="col-sm-6 ml-auto justify-content-center d-flex align-items-center">
              <Row>
                <h2 className="feature-head">Invest4Edu: Our Mission</h2>
                <p className="feature-intro">Our mission is to empower every individual to plan the future they deserve. We are offering India’s first platform which has a unique blend of global information about higher education and education savings financial products. Invest4edu’s easy to use technology will help individuals meet their financial needs of their carefully chosen educational goals.</p>
                <Quote quote="  Invest4Edu is a window into everything that's being needed, for nurturing your son or daughter's - Dream education goals.  "></Quote>
                <UserAvatar src={profileImage} designation="Rozy Efzal, Co-Founder &amp; CEO"></UserAvatar>
              </Row>
            </Col>
          </Row>
        </div>
        {/* </Container> */}
      </div>
    );
  }
}

export default Mission;