import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../images/logo_3.png';
import { FaUserPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {
    Link
} from "react-router-dom";
class PageHeader extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar className="navbarClass" variant={"light"} expand="lg">
                    <div className="container cont1">
                        <Navbar.Brand href="#">
                            <img src={logo} className="App-logo" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="justify-content-end" /*style={{ width: "100%" }}*/
                                navbarScroll
                            >
                                <NavDropdown title="About Us" id="basic-nav-dropdown" className="headLinkTab">
                                    <NavDropdown.Item href="#action/3.1">Why Invest4Edu</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Who we are</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">How Invest4Edu Works</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Education Opportunities" id="basic-nav-dropdown" className="headLinkTab">
                                    <NavDropdown.Item href="#action/3.1">Study in India</NavDropdown.Item>
                                    <NavDropdown.Item href="/StudyInCanada">Study in Canada</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Study in UK</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Study in Australia</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Study in US</NavDropdown.Item>
                                </NavDropdown>


                                <Nav.Link as={Link} to="/home" className="headLinkTab">Contact</Nav.Link>
                                <Nav.Link as={Link} to="/about" className="headLinkTab logTab"><FaUser className="margin-icon"/>Login</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className="headLinkTab signTab"><FaUserPlus className="margin-icon"/>Sign Up</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default PageHeader;
