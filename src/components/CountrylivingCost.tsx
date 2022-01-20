import React, { Component } from 'react'

class CountrylivingCost extends Component {
    render() {
        return (
            <div className="CostEduMain">
                <div className=" cont1 container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title mb-0 Cost-h2">
                                <h2>Guide to Living Costs in Canada</h2>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="Table-BG">Particulars

                                            </th>
                                            <th scope="col" className="Table-BG" >Living Cost (CAD)

                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="table-bg">
                                        <tr>

                                            <td>Student
                                            </td>
                                            <td>15000
                                            </td>

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

export default CountrylivingCost
