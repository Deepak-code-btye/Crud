import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { deleteData, getUsers } from "../service/api";
import "./Alluser.css";

const Alluser = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await deleteData(id);
    getAllUsers();
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, _id) => {
            return (
              <>
                <tr>
                  <td data-label="Id" key={_id}>
                    {user._id}
                  </td>
                  <td data-label="Name">{user.name}</td>
                  <td data-label="Username">{user.username}</td>
                  <td data-label="Email">{user.email}</td>
                  <td data-label="Phone">{user.phone}</td>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Basic example"
                  >
                    <NavLink to={`/edit/${user._id}`}>
                      <button type="button" className="btn btn-success">
                        Edit
                      </button>
                    </NavLink>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </div>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Alluser;
