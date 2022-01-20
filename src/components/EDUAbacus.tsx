import React from "react";
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import abacusImage from '../images/graphic2.png';
import { BsBoxArrowUpRight } from "react-icons/bs"
import CountryList from "./CountryList";
import EduLevel from "./Edulevel";
import EduCourse from "./EduCourses";

type EduAbacusState = { country: string };
let self:any =null;
class EDUAbacus extends React.Component<{}, EduAbacusState> {
    
    constructor(props: any) {
        super(props);
        this.state = {
            country: ""
        
        };
        self=this;
        this.setState = this.setState.bind(this);

    }


    onchangeCountry(event: React.FormEvent<HTMLSelectElement>) {
        const countryCode = (event.currentTarget.value);
        self.setState({ country: countryCode })
        // console.log(countryCode);
    }


render() {
    return (
        <div className="mt-5 color-white" >
            <div className="m-5 p-3">
                <h3 className="d-flex justify-content-center abacus-head">EDU ABACUS</h3>
                <p className="text-center abacus-desc">It can take you through an assessment of your savings and earnings and how both will help you to attain your educational funding
                    needs.
                </p>
            </div>
            <Container fluid="md" className="abacus-cont1">
                <Row className="m-1 p-1 abacus-wrap">
                    <Col className="col-sm-6 ml-auto justify-content-center d-flex align-items-center abacus-img-cont">
                        <img className="img-fluid abacus-img" src={abacusImage} data-aos="fade-right" alt="" />
                    </Col>

                    <Col className="col-sm-6 ml-auto justify-content-center d-flex align-items-center abacus-calc-cont">
                        <Row className="m-1 p-1">
                            <h3 className="d-flex justify-content-center colr-text abacus-calc-head">Spend  a few minutes with  EDU ABACUS.</h3>
                            <p className="text-center colr-text abacus-calc-desc">Get the real assessment for your ability to fulfil education goals.</p>


                            <Form>
                                <CountryList countryCode="" onChange={this.onchangeCountry} />
                                <EduLevel countryCode={this.state.country} />
                                <EduCourse  />

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel controlId="floatingPassword" label="Planning to begin in" className="colr-text">
                                        <Form.Select aria-label="Default select example" className="abacus-form-sel colr-text">
                                            <option value="">2021</option>
                                            <option value="">2022</option>
                                            <option value="">2023</option>
                                            <option value="">2024</option>
                                            <option value="">2025</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>

                                <div className="abacus-btn">
                                    <Button href="/EduAbacusResult" variant="light" size="lg" className="abacus-cal-btn colr-text">
                                        <BsBoxArrowUpRight className="margin-icon" /> Calculate
                                    </Button>
                                </div>
                                <div className="abacus-btn">
                                    <Button variant="link" className="m-3 colr-text">Need Help?</Button>
                                </div>
                            </Form>
                        </Row>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}
}

export default EDUAbacus;