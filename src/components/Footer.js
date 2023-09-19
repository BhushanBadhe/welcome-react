import { Component } from "react";


class Footer extends Component{
    constructor(props){
        super()
        console.log("Class Component constructor invoked");
    }

    render(){
        return(
            <div className="footer-card">
                <p className="footer-text">Copyright @2023</p>
            </div>
        )
    }
}

export default Footer;
