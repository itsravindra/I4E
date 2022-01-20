import React, { Component } from 'react'
import EstimatedCost from '../images/edubabacus_result-2.png'
import CurrentCost from '../images/edubabacus_result.png'
import minus from '../images/minus.png'
class AbacusCalResult extends Component {
    render() {
        return (
            <div>

                <div className="text-center" style={{ padding: "10% 0 0 0" }}>
                    <div className="container cont1">
                        <div className="row">
                            <div className="col-sm-8 m-auto">
                                <h1 className='abacus-result-head'>Your Edu-abacus result</h1>
                                <p className='abacus-result-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, beatae atque dolorum impedit provident veritatis inventore similique deserunt suscipit quae.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="" style={{paddingTop: "0"}}>
                    <div className="container cont1">
                        <div className="row align-items-center" style={{ padding: "5% 2% 0", justifyContent: "center" }}>
                            <div className="form-content" style={{ backgroundColor: "#FFF", width: " 80%" }}>
                                <div className="form-items" style={{ maxWidth: "100%", textAlign:"left", display:"inline-block", width:"100%", transition:"all 0.4s ease" }}>
                                    <form id="edu_abacus_form_parent" className="form-inline" style={{ backgroundColor: "#fff", marginBottom: "0", display:"flex", flexFlow:"row wrap", alignItems:"center" }}>
                                        <div className="form-group field-wrapper">

                                            <select name="study_destination" id="study_destination" className="form-control">

                                                <option value="" selected>Select destination</option>

                                                <option value="">India</option>
                                                <option value="">Canada</option>
                                                <option value="">UK</option>
                                                <option value="">Australia</option>
                                                <option value="">New zealand</option>
                                            </select>

                                        </div>

                                        <div className="form-group field-wrapper">

                                            <select name="edu_level" id="edu_level" className="form-control">
                                                <option value="" selected>Select education level</option>
                                                <option value="">Graduation</option>
                                                <option value="">PG</option>
                                                <option value="">Masters</option>
                                                <option value="">Doctoral</option>
                                            </select>

                                        </div>

                                        <div className="form-group field-wrapper">

                                            <select name="course" id="course" className="form-control">
                                                <option value="" selected>Select course of interest</option>
                                                <option value="">Technology</option>
                                                <option value="">Science</option>
                                                <option value="">Medical</option>
                                                <option value="">Business</option>
                                                <option value="">Finance</option>

                                            </select>

                                        </div>

                                        <div className="form-group field-wrapper">

                                            <select name="course" id="course" className="form-control">
                                                <option value="" selected>Planning to begin in</option>
                                                <option value="">2021</option>
                                                <option value="">2022</option>
                                                <option value="">2023</option>
                                                <option value="">2024</option>
                                                <option value="">2025</option>

                                            </select>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center" style={{ padding: "5% 2%" }}>
                            <div className="col-md-6 col-xs-12 text-center order-1 order-md-1" style={{ backgroundColor: "#3981f5", padding: "5% 2%", borderRadius: " 20px", position:"relative" }}>
                                <p style={{ textAlign: "center", margin: " 0 auto 10%" }}>
                                    <img src={EstimatedCost} className="img-fluid img-responsive" alt=""></img>
                                </p>
                                <ul className="d-flex align-items-center" style={{ position: "absolute", width: "92%", backgroundColor: "#778cad" }}>
                                    <li style={{ display: "inline-block", fontSize:"16px", lineHeight:"25px", color:"#80808", marginBottom:"0px" }}>
                                        <h2 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", color: "#fff", lineHeight:"50px" }}>Estimated cost</h2>
                                    </li>
                                    <li style={{ display: "inline-block", marginLeft: "40%" }}>
                                        <a href="" id="edu_abacus_form_parent_btn" className="btn btn-main-md float-right" style={{ backgroundColor: "#05499c", padding: "10% 50%", color:"#fff", outline:"none", textTransform:"uppercase", float:"right" }}>INR
                                        </a>
                                    </li>
                                    <li style={{ display: "inline-block", marginLeft: "10%" }}>
                                        <a href="" id="edu_abacus_form_parent_btn" className="btn btn-main-md float-right" style={{ backgroundColor: "#05499c", padding: "10% 50%", color:"#fff", outline:"none", textTransform:"uppercase", float:"right" }}>USD
                                        </a>
                                    </li>
                                </ul>
                                <table className="table mumTable-1" style={{ marginTop: "30%" }}>
                                    <thead>
                                        <tr className="bg-blue" style={{ color: "#FFFFFF" }}>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="abac-table-td"><strong>Education cost</strong></td>
                                            <td className="abac-table-td">₹ &nbsp; 45,00,000</td>
                                        </tr>
                                        <tr id="hide_living_cost_row2">
                                            <td className="abac-table-td"><strong>Living cost</strong></td>
                                            <td className="abac-table-td">₹ &nbsp; 20,00,000</td>
                                            <td className="abac-table-td" id="hide_living_cost_btn2">
                                                <img src={minus}className="img-fluid img-responsive" alt=""></img>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="abac-table-td"><strong>Total cost</strong></td>
                                            <td className="abac-table-td" id="total_cost2">₹ &nbsp; 65,00,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a type="submit" href="" className="btn btn-rounded-icon btn-eduabacus" data-toggle="modal" data-target="#signup-form" style={{ border: "1px solid #05499", padding: "13px 50px", borderRadius: "100px", marginTop: "10%" ,backgroundColor:"#edf4ff", color:"#05499" }}>
                                    <i className="ti-new-window" style={{ color: "#05499c" }}></i>
                                    INVEST NOW
                                </a>
                            </div>
                            <div className="col-md-6 col-xs-12 text-center order-1 order-md-1" style={{ backgroundColor: "#edf4ff", padding: "5% 2%", borderRadius: "20px",position:"relative" }}>
                                <p style={{ textAlign: "center", margin: "0 auto 10%" }}>
                                    <img src={CurrentCost} className="img-fluid img-responsive" alt=""></img>
                                </p>
                                <ul className="bg-blue d-flex align-items-center" style={{ position: "absolute", width: "92%" }}>
                                    <li style={{ display: "inline-block",fontSize:"16px", lineHeight:"25px", color:"#80808", marginBottom:"0px" }}>
                                        <h2 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", color: "#fff", lineHeight:"50px" }}>Current cost</h2>
                                    </li>
                                    <li style={{ display: "inline-block", marginLeft: "40%" }}>
                                        <a href="" id="edu_abacus_form_parent_btn" className="btn btn-main-md float-right" style={{ backgroundColor: "#05499c", padding: "10% 50%", color:"#fff", outline:"none", textTransform:"uppercase", float:"right" }}>INR
                                        </a>
                                    </li>
                                    <li style={{display: "inline-block", marginLeft: "10%"}}>
                                        <a href="" id="edu_abacus_form_parent_btn" className="btn btn-main-md float-right" style={{ backgroundColor: "#05499c", padding: "10% 50%", color:"#fff", outline:"none", textTransform:"uppercase", float:"right" }}>USD
                                        </a>
                                    </li>
                                </ul>
                                <table className="table" style={{ marginTop: "30%" }}>
                                    <thead>
                                        <tr className="bg-blue" style={{ color: "#FFFFFF" }}>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="abac-table-td"><strong>Education cost</strong></td>
                                            <td className="abac-table-td">₹ &nbsp; 25,00,000</td>
                                        </tr>
                                        <tr id="hide_living_cost_row1">
                                            <td className="abac-table-td"><strong>Living cost</strong></td>
                                            <td className="abac-table-td">₹ &nbsp; 10,00,000</td>
                                            <td className="abac-table-td" id="hide_living_cost_btn1">
                                                <img src={minus} className="img-fluid img-responsive" alt=""></img>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="abac-table-td"><strong>Total cost</strong></td>
                                            <td className="abac-table-td" id="total_cost1">₹ &nbsp; 35,00,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AbacusCalResult
