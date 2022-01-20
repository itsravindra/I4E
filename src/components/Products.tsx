import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import products from '../images/products.png';
import eduLoanImage from '../images/fin_icons/edu-loan-2.png';
import mfImage from '../images/fin_icons/mutual-funds-2.png';
import fdImage from '../images/fin_icons/fixed-deposit-2.png';
import goldImage from '../images/fin_icons/gold-2.png';

class Products extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="p-5 bg-light-blue">
                <div className="m-5 p-3">
                    <h2 className="d-flex justify-content-center prods-head">Invest timely for your child's future</h2>
                    <p className="text-center prods-desc">Invest4Edu makes it easy to invest for your kids' future education goals.
                        No complicated tasks. No gimmicks.</p>
                </div>
                <Container fluid="md">
                    <Row >
                        <Col className="col-sm-6">
                            <img className="img-fluid" src={products} data-aos="fade-right" />
                        </Col>

                        <Col className="col-sm-6">
                            <Row className="bg-white p-3 prods-container">
                                <Col className="col-sm-6">
                                    <Row className="justify-content-center d-flex align-items-center m-2 p-2 prods-img-cont">
                                        <img src={mfImage} className="img-fluid img-responsive product-circle"></img>
                                        <h4 className="text-center prods-name">Mutual Funds</h4>
                                    </Row>
                                </Col>

                                <Col className="col-sm-6">
                                    <Row className="justify-content-center d-flex align-items-center m-1 p-1 prods-img-cont">  <img src={fdImage} className="img-fluid img-responsive product-circle"></img>
                                        <h4 className="text-center prods-name">Fixed Deposits</h4>
                                    </Row>
                                </Col>

                                <Col className="col-sm-6">
                                    <Row className="justify-content-center d-flex align-items-center m-1 p-1 prods-img-cont"> <img src={goldImage} className="img-fluid img-responsive product-circle"></img>
                                        <h4 className="text-center prods-name">Gold</h4>
                                    </Row>
                                </Col>

                                <Col className="col-sm-6">
                                    <Row className="justify-content-center d-flex align-items-center m-1 p-1 prods-img-cont">  <img src={eduLoanImage} className="img-fluid img-responsive product-circle"></img>
                                        <h4 className="text-center prods-name">Education Loan</h4>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Products;