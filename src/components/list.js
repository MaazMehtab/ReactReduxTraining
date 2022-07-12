import React, { Component } from "react";

const List = ({ users }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Profile Picture</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email Id</th>
        </tr>
      </thead>

      <tbody>
        {users.map((val, index) => {
          return (
            <tr>
              <td>{val.id}</td>
              <td>
                <img
                  src={val.avatar}
                  class="rounded-circle"
                  style={{ width: 50, height: 50 }}
                  alt="Avatar"
                />
              </td>
              <td>{val.first_name}</td>
              <td>{val.last_name}</td>
              <td>{val.email}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
