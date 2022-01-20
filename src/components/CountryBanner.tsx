import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
// import { Button } from 'react-bootstrap'
import canada from '../images/canada/canada.png';
import economy from '../images/canada/icons/canada-economy.png';
import weather from '../images/canada/icons/canada-weather.png';
import eduCost from '../images/canada/icons/canada-courses.png';
import livingCost from '../images/canada/icons/canada-living-costs.png';

class CountryBanner extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="gradient-banner">

            <div className="position-relative color-white country-bann-section">
                <div className="container cont1">
                    <Row>
                        <Col className="col-sm-6">
                            <img className="img-fluid" src={canada} data-aos="fade-right" />
                        </Col>
                        <Col className="col-sm-6 country-feature">
                            <Row className="p-3">
                                <Col className="col-sm-6 country-feature">
                                    <Row className="justify-content-center d-flex align-items-center m-2 p-2 country-feature-img">
                                        <a href="#economy"><img src={economy} className="img-fluid img-responsive country-feature-circle"></img></a>
                                        <a href="#economy" style={{color: '#fff'}} className="text-center nav-link">Canada Economy</a>
                                        {/* <h4 className="text-center prods-name">Canada Economy</h4> */}
                                    </Row>
                                </Col>

                                <Col className="col-sm-6 country-feature">
                                    <Row className="justify-content-center d-flex align-items-center m-1 p-1 country-feature-img">
                                        <a href="#weather"><img src={weather} className="img-fluid img-responsive country-feature-circle"></img></a>
                                        <a href="#weather" style={{color: '#fff'}} className="text-center nav-link">Canada Weather</a>
                                        {/* <h4 className="text-center prods-name">Canada Weather</h4> */}
                                    </Row>
                                </Col>

                                <Col className="col-sm-6 country-feature">
                                    <Row className="justify-content-center d-flex align-items-center m-1 p-1 country-feature-img">
                                        <a href="#education-costs"><img src={eduCost} className="img-fluid img-responsive country-feature-circle"></img></a>
                                        <a href="#education-costs" style={{color: '#fff'}} className="text-center nav-link">Education Costs</a>
                                        {/* <h4 className="text-center prods-name">Education Costs</h4> */}
                                    </Row>
                                </Col>

                                <Col className="col-sm-6 country-feature">
                                    <Row className="justify-content-center d-flex align-items-center m-1 p-1 country-feature-img">
                                        <a href="#living-costs"><img src={livingCost} className="img-fluid img-responsive country-feature-circle"></img></a>
                                        <a href="#living-costs" style={{color: '#fff'}} className="text-center nav-link">Living Costs</a>
                                        {/* <h4 className="text-center prods-name">Living Costs</h4> */}
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </div>
            </div>
        );
    }
}

export default CountryBanner;