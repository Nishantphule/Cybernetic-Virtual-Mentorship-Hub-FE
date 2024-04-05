import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import "./RegistrationStyle.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Regitration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    role: "",
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Navbar />
      <main>
        <div>
          <section className="heading">
            <p>Register Now</p>
          </section>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <section className="input1">
                <div>
                  <p>Full name</p>
                  <input
                    placeholder="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p>E-mail</p>
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p>Password</p>
                  <input type="password" placeholder="Password" />
                </div>
              </section>
              <section className="input2">
                <div>
                  <p>User Name</p>
                  <input
                    placeholder="Useer Name"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p>Role</p>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="Mentor">Mentor</option>
                    <option value="Student">Student</option>
                  </select>
                </div>
                <div>
                  <p>Confirm Password</p>
                  <input
                    placeholder="Confirm Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </section>
            </div>
            <div className="lg">Already a User ?<Link to="/login">Login Here!</Link> </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Regitration;
