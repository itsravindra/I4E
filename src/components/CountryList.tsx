import React from "react";
import {Form, FloatingLabel } from 'react-bootstrap';
// import { idText } from "typescript";
// import { idText } from "typescript";
// import { education_level_by_country_code } from "./CONSTANT";
import { get } from '../utils/service-facade';
// import EduLevel from "./Edulevel";

interface CountryListProps {
    countryCode?: string,
    onChange?: React.ChangeEventHandler<HTMLSelectElement>
  }
  type CountryListState = { countryList: Array<any> };
class CountryList extends React.Component<CountryListProps,CountryListState>
        
{
    constructor(props: any) {
        super(props);
        this.state = {
            countryList: [],
            
        };
        this.setState = this.setState.bind(this);
    }
    componentDidMount() {
        this.getCountryList(this.setState);
    }
    
            
            // onChangeLevel(e:{target:{value:any;};})
            // {
            //     const level =(e.target.value);
            //     console.log(level);
            // }
            getCountryList = async function (setState: Function) {
                const response = await get<any>("http://localhost:8887/countrylist.json");   
                console.log(response);
                setState({
                    countryList: response.parsedBody.countries,
                    countryLoaded: true
                });
            };
       
    render() {
        const { countryList } = this.state;
        return (
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel controlId="floatingPassword" label="Select destination">
                <Form.Select aria-label="Default select example" onChange={this.props.onChange}>
                    {countryList.map(function (country: any, index : any) {
                        return <option  key={country.code} value={country.code}>{country.description}</option>;
                        
                    })}
                </Form.Select>
                </FloatingLabel>
                </Form.Group>
                

        );
    }
}

export default CountryList;