import React, { Component } from 'react'

class CountryEconomy extends Component {
    render() {
        return (
            <div className="EconomyMain">
                <div className="container cont1">
                    <div className="row Eco-Info-container" >
                        {/* style="padding: 5%; background-color: #edf4ff; border-radius: 20px; */}
                        <div className="col-md-6 col-xs-12 col-lg-6 Eco-Info-div">
                            <div className="section-title mb-0  Eco-Info-text">
                                <h1>Canada's Economy</h1>
                                <p>
                                    Canada's economy is highly developed and one of the largest in the world. In 2020, the country's
                                    annual
                                    gross
                                    domestic product (GDP) was $1.64 trillion in current USD, according to the latest available World Bank data. That made Canada the world's
                                    ninth-largest economy. <br /> <br />
                                    Canada's economy is highly dependent on international trade with exports and imports of goods and services each comprising about one-third of GDP.2 The country's three largest trading partners are the U.S., China, and the U.K. Its three largest industries, measured by their contributions to GDP, are real estate, rental, and leasing; manufacturing; and mining, quarrying, and oil and gas extraction.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 col-lg-6 Eco-Info-div">
                            <div className="section-title mb-0 Eco-Info-text">

                                <h1>Time zone difference</h1>
                                <p style={{width: '100%'}}>
                                    India is 9 hours and 30 minutes ahead of Ottawa, ON, Canada. <br/> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat
                                        massa.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. <br/> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
    }
}

                export default CountryEconomy;
