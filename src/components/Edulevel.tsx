import React from "react";
import { Form, FloatingLabel } from 'react-bootstrap';
import { get } from '../utils/service-facade';
// import CountryList from "./CountryList";
// import { education_level_by_country_code } from "./CONSTANT";
// import CountryList from "./CountryList";

var id: any = "";


interface EduLevelProps {
    countryCode?: string,

}
type EduLevelState = { EduLevelList: Array<any> };
let self : any = null;

class EduLevel extends React.Component<EduLevelProps, EduLevelState>{
    Edulevel: any;
    constructor(props: any) {
        super(props);
        this.state = {
            EduLevelList: [],
        };
        this.setState = this.setState.bind(this);
        self = this;

    }

    componentDidUpdate(prevProps: EduLevelProps) {
        if (prevProps.countryCode !== this.props.countryCode) {
            this.fetchTrans();
        }
    }

    async fetchTrans() {
        const response =  await get<any>("http://localhost:8887/EduLevel.json?" + this.props.countryCode);   
        console.log(response);
        self.setState({
            EduLevelList: response.parsedBody.educationLevels
        });
    }
    render() {
        const { EduLevelList } = this.state;
        return (

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel controlId="floatingPassword" label="Select Education level">
                    <Form.Select aria-label="Default select example" >
                        {/* onChange={this.onChangeLevel} */}
                        {EduLevelList.map(function (country: any, index: any) {
                            return <option value={country.educationLevelID}>{country.educationLevel}</option>;
                        })}
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>


        );
    }
}

export default EduLevel;