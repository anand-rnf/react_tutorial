import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      name,
      email,
    };
    console.log(formData);
  };

  // useEffect(() => {

  // })

  return (
    <div>
      <h1>{title}</h1>
      <Link to={"/about"}>About Us</Link>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h1>Welcome {name}!</h1>
    </div>
  );
};

export default Home;
