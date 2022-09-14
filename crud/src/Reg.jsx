import React, { useState } from "react";

const Reg = () => {
  const [user, setUser] = useState({
    fname: "",
    email: "",
    phone: "",
    password: "",
  });
  const { fname, email, phone, password } = user;
  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const [allData, setAllData] = useState([]);
  const submitBtn = (e) => {
    e.preventDefault();
    // const store = { ...user };
    // console.log(store);
    setAllData({ ...user });
    setUser({ fname: "", email: "", phone: "", password: "" });
  };
  return (
    <div>
      <h1>Students Details</h1>
      <div>
        <h6>Name</h6>
        <input type="text" onChange={handle} value={fname} name="fname" />
      </div>
      <div>
        <h6>Email</h6>
        <input
          type="email"
          onChange={handle}
          value={email}
          name="email"
          autoComplete="Off"
        />
      </div>
      <div>
        <h6>phone</h6>
        <input type="text" onChange={handle} value={phone} name="phone" />
      </div>
      <div>
        <h6>Password</h6>
        <input
          type="password"
          onChange={handle}
          value={password}
          name="password"
        />
      </div>
      <button type="submit" onClick={submitBtn}>
        submit
      </button>
    </div>
  );
};

export default Reg;
