import React, { Component } from 'react'

class CountryWeather extends Component {
    render() {
        return (
            <div className="EconomyMain">
                <div className="container cont1">
                    <div className="row Eco-Info-container" >
                        <div className="col-md-6 col-xs-12 col-lg-6 Eco-Info-div">
                            <div className="section-title mb-0  Eco-Info-text">
                                <h1 >Canada's Weather</h1>
                                <h2 className="weather-h2">Earth’s most diverse weather system.</h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 col-lg-6 Eco-Info-div">
                            <div className="section-title mb-0 Eco-Info-text">

                                {/* <h1>Time zone difference</h1> */}
                                <p className="mb-0"style={{ width: '100%', marginTop:'8px' }}>

                                    Canada is often associated with cold weather and snow, but in reality, its climate is as diverse as its landscape. Generally, Canadians enjoy four very distinct seasons, particularly in the more populated regions along the US border. Daytime summer temperatures can rise to 35°C and higher, while lows of -25°C are not uncommon in winter. More moderate temperatures are the norm in spring and fall.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default CountryWeather
