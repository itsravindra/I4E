import React from "react";
import {Form, FloatingLabel } from 'react-bootstrap';
import { get } from '../utils/service-facade';
// import CountryList from "./CountryList";
// import { education_level_by_country_code } from "./CONSTANT";
// import CountryList from "./CountryList";

var id:any="";


interface EduLevelProps {
    countryCode?: string,
    
  }
  type EduLevelState = { countryList: Array<any> };
  const base ="http://localhost:8080/i4e/i4e/v1/course/country/";
  
class EduLevel extends React.Component<EduLevelProps,EduLevelState>{
    Edulevel: any;
    constructor(props: any) {
        super(props);
        this.state = {
            countryList: [],
        };
        this.setState = this.setState.bind(this);
        
    }
    
    // onChangeLevel(event: { target: { value: any; }; }){
    //     const id = (event.target.value);
    //     console.log(id);
    //     // this.getCountryList(id);
        
    // }
    
    // componentDidMount() {
        
    //     this.Edulevel.getDerivedStateFromProps(this.setState)
        
    // }
    // getCountryList = async function (setState: Function) {
        
        
        // setState({
            
            //         });
            //     };
            
            
            
            static async getDerivedStateFromProps(state:any){
                id=state;
                console.log("id is ",id)
                const response = await get<any>(base);
                console.log("response",response);
                return{
                    countryList: response.parsedBody.educationLevel
                }
              }
            render() {
                const { countryList} = this.state;
        return (
            
             <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel controlId="floatingPassword" label="Select Education level">
                <Form.Select aria-label="Default select example" >
                {/* onChange={this.onChangeLevel} */}
                    {countryList.map(function (country: any, index : any) {
                        return <option value={country.educationLevelID}>{country.educationLevel}</option>;
                    })}
                </Form.Select>
            </FloatingLabel>
        </Form.Group>
            
        
        );
    }
}

export default EduLevel;