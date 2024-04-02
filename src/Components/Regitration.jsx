import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import "./RegistrationStyle.css";
import axios from "axios";

function Regitration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
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
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p>E-mail</p>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p>Password</p>
                  <input type="password" />
                </div>
              </section>
              <section className="input2">
                <div>
                  <p>User Name</p>
                  <input
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p>Role</p>
                  <select>
                    <option value="mentor">Mentor</option>
                    <option value="student">Student</option>
                  </select>
                </div>
                <div>
                  <p>Confirm Password</p>
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </section>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Regitration;
