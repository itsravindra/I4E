import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

class HelpWidget extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="p-5 parallax color-white help-wid-comp">
                <div className="container">
                    <Row>
                        <div className="help-wid-content" >
                            <h2 className="d-flex justify-content-center help-wid-head">Invest4Edu : How we can help you ?</h2>
                            <p className="text-center help-wid-desc">Education is the most powerful investment in our future. Education expense have grown exponentially and will continue to rise. In such scenario saving for education merely will not suffice , start investing. We leverage our platform to start this investment process to never compromise on your child's future. </p>
                        </div>
                    </Row>
                </div>
                <div className="text-center" >
                    <a href="https://www.youtube.com/watch?v=FVE4EgwkM-o">
                        <FontAwesomeIcon className="big-icon-font-size color-white" icon={faPlayCircle} />
                    </a>
                </div>

            </div>
        );
    }
}

export default HelpWidget;