    import React from "react";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import footerImage from '../images/logo_footer.png';
import { FaInstagram  } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook  } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter  } from "@react-icons/all-files/fa/FaTwitter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";



class Footer extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="p-5 color-white bg-dark footer footermain" >
                <div className="container">

                <Row className="inside-contRow">
                    <Col className="col-sm-12 col-md-6 col-lg-3">
                        <img src={footerImage} className="img-fluid img-responsive logo  image"></img>
                            <p className="ft">321,A Wing,Gokul Arcade,
                            <br />
                                Near Garware House,
                            <br />
                                Sahar Road,Ville Parle (E),
                            <br />
                                 Mumbai - 400057
                                 <br />
                                 <br />
                            </p>
                            <p className="ft">Phone : +91 98995 75852</p>
                            <p className="ft">Email : info@invest4edu.com</p>
                            <br />
                            
                             <div className="Social-icons">
                             <div className="social-icon" >
                                 <a href="https://www.instagram.com" className="FaIcons">
                                 <FaInstagram  />
                                 </a>
                                 </div>
                                 <div className="social-icon">
                                     <a href="https://www.facebook.com" className="FaIcons">
                             <FaFacebook />
                             </a>
                            </div>
                            <div className="social-icon">
                             <a href="https://twitter.com/explore" className="FaIcons"><FaTwitter/>
                             </a>
                            </div>
                            </div>
                    </Col>

                    <Col className="col">
                        
                            <h6 className="head h">Products</h6>

                            <ListGroup variant="flush" className="list">
                                <ListGroup.Item>Mutual Funds</ListGroup.Item>
                                <ListGroup.Item>Fixed Deposit</ListGroup.Item>
                                <ListGroup.Item>Gold</ListGroup.Item>
                                <ListGroup.Item>Education Loan</ListGroup.Item>
                            </ListGroup>
                        
                    </Col>


                    <Col className="col">

                            <h6 className="head">Invest4Edu</h6>

                            <ListGroup variant="flush" className="list">
                                <ListGroup.Item>About Us</ListGroup.Item>
                                <ListGroup.Item>Education opportunities</ListGroup.Item>
                                <ListGroup.Item>Blog</ListGroup.Item>
                                <ListGroup.Item>Careers</ListGroup.Item>
                                <ListGroup.Item>Help &amp; Support</ListGroup.Item>
                            </ListGroup>
                        


                    </Col>
                    <Col className="col">
                    
                            <h6 className="head">Quick Links</h6>

                            <ListGroup variant="flush" className="list">
                                <ListGroup.Item>Sign up</ListGroup.Item>
                                <ListGroup.Item>Contact Us</ListGroup.Item>
                                <ListGroup.Item>FAQs</ListGroup.Item>
                                <ListGroup.Item>Terms &amp; Conditions</ListGroup.Item>
                                <ListGroup.Item>Privacy Policy</ListGroup.Item>
                            </ListGroup>
    
                        
                    </Col>
                </Row>

                </div>
            </div>
        );
    }
}

export default Footer;