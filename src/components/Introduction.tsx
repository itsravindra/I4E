import React from "react";
import { Button } from 'react-bootstrap'
import Quote from './Quote';
import { FaQuoteLeft} from "react-icons/fa";
import {FaQuoteRight } from "react-icons/fa";

class Introduction extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="position-relative m-5 p-3">
                <div className="container">

                <h3 className="d-flex justify-content-center">Why to invest for Education? </h3>
                <p className="text-center">Education is turning out to be one of the biggest outflows families are paying out. Quality education needs investment and planning. The global research suggests that investing in education pays a higher return than a financial investment in stocks and bonds.</p>
                <div className="d-flex justify-content-center">
                 <FaQuoteLeft className="text-center"/><p className="m-1">  I have not failed. I've just found 10,000 ways that won't work.  </p><FaQuoteRight/>
                </div>
                
                <p className="text-center">Education is a life long currency and quality education comes at a price.
                    We encourage education investments for every family ,an early start is just not enough, investing optimally also matters.</p>

                <div className="text-center" >
                    <Button variant="primary" size="lg">
                        Our Investment Products
                    </Button>
                </div>

                </div>
            </div>
        );
    }
}

export default Introduction;