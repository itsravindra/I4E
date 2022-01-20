import React from "react";
import {Form, FloatingLabel } from 'react-bootstrap';
import { get } from '../utils/service-facade';
// import EduLevel from "./Edulevel";



type CountryListState = { countryList: Array<any> };
interface CountryListProps {
    value?: string
  }
class EduCourse extends React.Component<CountryListProps,CountryListState>{
    constructor(props: any) {
        super(props);
        this.state = {
            countryList: []
        };
        this.setState = this.setState.bind(this);
    }

    componentDidMount() {
        this.getCountryList(this.setState);
        // const courseid = EduLevel;
    }


    getCountryList = async function (setState: Function) {
        const response = await get<any>("http://localhost:8080/i4e/i4e/v1/course/education/{educationLevelID}?educationLevelID=2");
        console.log(response);
        
        setState({
            countryList: response.parsedBody.courses,
            countryLoaded: true
        });
    };

    render() {
        const { countryList } = this.state;
        return (
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel controlId="floatingPassword" label="Select destination">
                <Form.Select aria-label="Default select example">


                    {countryList.map(function (country: any, index : any) {
                        return <option value={country.courseID}>{country.description}</option>;
                    })}
                        

                </Form.Select>
            </FloatingLabel>
        </Form.Group>
        );
    }
}

export default EduCourse;