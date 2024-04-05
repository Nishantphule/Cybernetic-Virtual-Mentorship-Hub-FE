import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import "../Components/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const handleChange = async(e) =>{
    const{name , value} = e.target;
    setFormData({...formData,[name]:value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Navbar />
      <main>
        <div className="form">
          <section className="heading">
            <h1>Login Your Account</h1>
          </section>
          <form onSubmit={handleSubmit}>
            <section className="input1">
              <div>
                <p>User Name Or Email:</p>
                <input type="text" placeholder="Enter Username or Email" required name="username" value={formData.username} onChange={handleChange}></input>
              </div>
              <div>
                <p>Confirm Password:</p>
                <input type="password" placeholder="Confirm Password" required name="password" value={formData.password} onChange={handleChange} />
              </div>
            </section>
          <div className="reg">New User ?<Link to="/">Sign Up!</Link> </div>
          <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
