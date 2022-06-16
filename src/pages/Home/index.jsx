import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState("10");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      name,
      email,
    };
    console.log(formData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          url: "https://dummyjson.com/users",
          method: "GET",
          params: {
            limit: limit,
          },
        });
        setUsers(res.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [limit]);

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
      <select value={limit} onChange={(e) => setLimit(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <h3>Users</h3>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
