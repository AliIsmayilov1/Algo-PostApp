import { method } from "lodash";
import { useContext, useEffect, useState } from "react";
import "./posts.css";
import { Link } from "react-router-dom";
import context from "./context";
import context from "./context";

function Users() {
  let context = useContext(context);
  let { postUsers, setPostUsers } = context;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPostUsers(data);
      });
  }, []);

  return (
    <div>
      {postUsers.length
        ? postUsers.map((user) => (
            <div>
              <Link to={`/users/${user.id}`} className="posts">
                <b>User's name:</b>
                {user.name}
              </Link>
            </div>
          ))
        : "Users not found :/"}
    </div>
  );
}

export default Users;
