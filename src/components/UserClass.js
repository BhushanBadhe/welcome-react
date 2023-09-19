import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        login:"name",
        location: "Somewhere else"
      }
    };
    console.log("UserClass Constructor Invoked");
    
    console.log("State Value", this.state.count);
  }

  async componentDidMount(){
    // console.log("Child ComponentDidMount called");
    

    const response = await fetch('https://api.github.com/users/BhushanBadhe');
    const data = await response.json();
    console.log("Class component API data", data);

    this.setState({
      userInfo: data
    })


  }


  componentDidUpdate(){
    // clearInterval(this.timer);
    console.log("Component Did Update Called ");
  }

  componentWillUnmount(){
    console.log("Component Will Unmount 2 Called ");
  }
  render() {
    const {login,location,public_repos} = this.state.userInfo

    return (
      <div className="user-card" style={{ marginTop: "2px" }}>
        <h1>Name : {login}</h1>
        <h2>Location2 : {this.state.userInfo.location == null ? "Pune" : "India"}</h2>
        <p>{this.props.componentType}</p>
        <p>Total Repositories : {public_repos}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default UserClass;





// There are 3 cycles of class component in react 

// --- Mounting Cycle ----
// constructor (dummy data)
// render (dummy data) ==> <HTML> (dummy)
// component did mount
// ==> API Call 
// this.setState ==> state variable is updated

// ---Update Cycle 
//   render API Data 
// <HTML new API Data>
// componentWillUpdate

// Unmount Cycle 
// --In this cycle componentWillUnmount lifecycle method will be invoked when we try to change the page