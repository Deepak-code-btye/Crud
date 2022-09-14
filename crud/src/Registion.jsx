import React, { useState } from "react";

const Registion = () => {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const [alldata, setAlldata] = useState([]);
  const submitform = (e) => {
    e.preventDefault();
    const store = { ...user, id: new Date().getDate().toString() };
    // console.log(store);
    setAlldata([...alldata, store]);
    setUser({ email: "", phone: "", password: "" });
  };
  // --------------------------todo list----------------------------
  // const [item, setItem] = useState("");

  // const handleItem = (e) => {
  //   setItem(e.target.value);
  // };
  // --------------------------------------------------------------

  return (
    <>
      <form onSubmit={submitform}>
        <h1>Registration Page</h1>
        <div>
          <h3>Email</h3>
          <input
            type="email"
            onChange={handle}
            value={user.email}
            name="email"
          />
        </div>
        <div>
          <h3>Phone</h3>
          <input
            type="text"
            onChange={handle}
            value={user.phone}
            name="phone"
          />
        </div>
        <div>
          <h3>Password</h3>
          <input
            type="text"
            onChange={handle}
            value={user.password}
            name="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>
          {alldata.map((currElem) => {
            const { id, email, phone, password } = currElem;
            return (
              <>
                <div key={id}>
                  <p>{email}</p>
                  <p>{phone}</p>
                  <p>{password}</p>
                </div>
              </>
            );
          })}
        </h1>
      </div>
      {/* ------------------------todo list------------------------------- */}
      {/* <div>
        <h1>TODO List Item</h1>
        <div>
          <form action="">
            <input type="text" onChange={handleItem} value={item} name="item" />
            <button type="submit"> ADD</button>
          </form>
        </div>
      </div> */}
      {/* ------------------------------- */}
    </>
  );
};

export default Registion;
