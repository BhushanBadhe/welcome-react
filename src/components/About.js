import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{

    constructor(props){
        super(props)
        this.timer = null;
        console.log("Parent constructor invoked");
    }

    componentDidMount(){
        console.log("Parent componentDidMount invoked");

     // Clear this interval from componentWillUnmount method

       this.timer =  setInterval(()=>{
            console.log("About component ");
        },1000)
    }
    
    componentWillUnmount(){
        console.log("About unmount");
        clearInterval(this.timer);
    }
    componentDidUpdate(){
        console.log("Parent class componentDidUpdate");
        
    }

    render(){
        console.log("Parent Render Method Called");
        return <h1>About Component of swiggy clone</h1>
        // return(
           
        //     <>
        //     <UserClass />
        //     <User name={"Bhushan Badhe"} componentType={"Functional Component"} />
        //     </>

        // )
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

