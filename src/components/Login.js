import { useFormik } from "formik";
import React, { useEffect } from "react";

const Login = () => {


  useEffect(() => {
    console.log("Component mounted");
  
    const timer = setInterval(() => {
      console.log("Login component");
    }, 1000);
  
    return () => {
      console.log("Component unmounted");
      clearInterval(timer);
    };
  }, []);

  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit: values => {
      alert(JSON.stringify(values,null,200))
    }
  });




  return (
    <div className="login-container">
      <div className="login-form">
      <h1>Welcome Back</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="field-separator">
        <label htmlFor="email">Enter Email Address</label>
        <input
        id="email"
        name="email"
        type="email" 
        onChange={formik.handleChange}
        value={formik.values.email}
        />
        </div>

      <div className="field-separator">
      <label htmlFor="password" style={{marginTop:"10px"}}>Enter Password</label><br/>
        <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password}/>
      </div>
      <div className="field-separator">

      <button className="login-btn">Submit</button>
      </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
