import React, { Component, useEffect } from "react";
import List from "../../components/list";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/actions/userAction";

const Home = () => {
  const dispatch = useDispatch();
  const {users} = useSelector((state) => state);
  console.log("Home user", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

 
  return (
    <div className="container-fluid  ">
      <div className="text-center">
        <h1>User List</h1>
      </div>
      <div>
        <List users={users} />
      </div>
    </div>
  );
};

export default Home;
