import React, { Component } from 'react'

class AbacusDataApi extends Component {
    state = {
        loading: true
    };
    async componentDidMount() {
        const url = "https://api.randomuser.me/"
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

    }
    render() {
        return (
            <div>
                {this.state.loading ? <div>loading...</div> : <div>person</div>}
            </div>
        )
    }
}

export default AbacusDataApi
