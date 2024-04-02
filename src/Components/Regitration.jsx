import React from "react";
import Navbar from "./Navbar";
import "./RegistrationStyle.css";

function Regitration() {
  return (
    <>
      <Navbar />
      <main>
        <div className="form">
          <section className="heading">
            <p>Register Now</p>
          </section>
          <form action="">
            <section className="input1">
              <div>
                <p>Full name</p>
                <input type="text" />
              </div>
              <div>
                <p>E-mail</p>
                <input type="email" />
              </div>
              <div>
                <p>Password</p>
                <input type="password" />
              </div>
            </section>
            <section className="input2">
              <div>
                <p>User Name</p>
                <input type="text" />
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
                <input type="password" />
              </div>
            </section>
          </form>
          <button>Submit</button>
        </div>
      </main>
    </>
  );
}

export default Regitration;
