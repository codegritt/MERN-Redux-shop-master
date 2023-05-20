import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Userslist from "./Users.module.css";
import Userslistheader from "./Users.module.css";
import Userslistclass from "./Users.module.css";
import Userslistclassmod from "./Users.module.css";

const Users = ({ setUserId }) => {
  const [toggle, setToggle] = useState(true);

  const { isLoading, isError, data, error } = useQuery("users", async () => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    return data;
  });

  if (isLoading) {
    return <h5>Loading...</h5>;
  }

  if (isError) {
    return <h5>{error}</h5>;
  }

  return (
    <>
      <div className={Userslist.userslist}>
        <h5 className={Userslistheader.userslistheader}>
          Employees of the year !
        </h5>
        <ul className={Userslistclass.userslistclass}>
          {data?.map((user) => (
            <li key={user.id} onClick={() => setToggle(!toggle)}>
              {user.name}

              {toggle && (
                <ul
                  class="list-group"
                  className={Userslistclassmod.userslistclassmod}
                >
                  <li class="list-group-item">Street: {user.address.street}</li>
                  <li class="list-group-item">City: {user.address.city}</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Users;
