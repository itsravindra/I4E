import React from "react";
import {Button} from 'react-bootstrap';
import { ImAndroid } from "react-icons/im";
import { AiOutlineApple } from "react-icons/ai";
class AppInfo extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="bg-blue p-5 color-white app_info_main_div">
            {/* <div className="m-5 p-3"> */}
                <h3 className="d-flex justify-content-center">It's time to secure your Kids' Future</h3>
                <p className="text-center appinfoP">Download our trusted app. Get Invest4Edu App &amp; never miss an opportunity!<br />
                    We promise - you won’t look back.</p>
           {/* </div>  */}
           <div className="text-center" >
                    <Button variant="light" size="lg" className="m-2 appbutton" >
                    <AiOutlineApple className="appIcon"/>  IPHONE
                    </Button>                                    <Button variant="light" size="lg" className="m-2 appbutton">
                    <ImAndroid className="appIcon"/>  ANDROID
                    </Button>
              </div>

            </div>
        );
    }
}

export default AppInfo;