import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{

    constructor(props){
        super(props)
        console.log("Parent constructor invoked");
    }

    componentDidMount(){
        console.log("Parent componentDidMount invoked");

     // Clear this interval from componentWillUnmount method

    //   this.timer =  setInterval(()=>{
    //         console.log("About component");
    //     },1000)
    }
    componentDidUpdate(){
        console.log("Parent class componentDidUpdate");
        
    }
    componentWillUnmount(){
        console.log("About unmount");
        // clearInterval(this.timer);
    }

    render(){
        console.log("Parent Render Method Called");
        return(
           
            <>
            <UserClass />
            <User name={"Bhushan Badhe"} componentType={"Functional Component"} />
            </>

        )
    }

}


// const About = () => {
//     return (<div>
//         <h1>About Us</h1>
//         <User name={"Bhsuhan Badhe"} componentType={"Functional Component"}/>
//         <UserClass name={"Bhsuhan Badhe"} componentType={"Class Based Component"}/>
//         </div>)
// }





export default About;

