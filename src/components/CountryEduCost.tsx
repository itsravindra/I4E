import React, { Component } from 'react'

class CountryEduCost extends Component {
    render() {
        return (
            <div className="CostEduMain">
                <div className=" cont1 container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title mb-0 Cost-h2">
                                <h2> Costs in Canada</h2>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="Table-BG">Course

                                            </th>
                                            <th scope="col" className="Table-BG" >Education Cost (CAD)

                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="table-bg">
                                        <tr>

                                            <td>Undergraduate Level
                                            </td>
                                            <td>13000 to 20000
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>Postgraduate Level
                                            </td>
                                            <td>17000 to 25000
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>Doctoral Level
                                            </td>
                                            <td>7000 to 15000
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>MBA
                                            </td>
                                            <td>30000 to 40000 <br />
                                                <i className="text-muted"> most common course</i>
                                            </td>

                                        </tr>




                                    </tbody>

                                </table>

                                <p className="text-center">NOTE : Please note all fee figures are indicative. Above fee is - per annum.</p>






                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountryEduCost
