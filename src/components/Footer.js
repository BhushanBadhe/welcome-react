import { Component } from "react";


class Footer extends Component{
    constructor(props){
        super()
        console.log("Class Component constructor invoked");
    }

    render(){
        return(
            <div className="flex items-center justify-center h-20  bg-yellow-200">
                <p className="footer-text font-bold text-2xl">Copyright @2023</p>
            </div>
        )
    }
}

export default Footer;
