import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./posts.css";

function UserPosts() {
  let params = useParams();
  let { id } = params;
  let [user, setUser] = useState(null);
  let [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (!isEmpty(data)) {
          setUser(data);
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  useEffect(() => {
    if (user) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          let newArr = data.filter((post) => post.userId == user.id);
          if (!isEmpty(newArr)) {
            setUserPosts(newArr);
          }
        })
        .catch((error) => {
          console.log({ error });
        });
    }
    console.log(userPosts);
  }, [user]);

  return (
    <div>
      {user ? (
        <div>
          <b>Name:</b>
          {user.name}
          <br></br> <b>Username:</b>
          {user.username} <br></br> <b>Email:</b>
          {user.email} <br></br> <b>Phone:</b>
          {user.phone} <br></br> <b>Posts:</b> <br></br>
          {userPosts.length
            ? userPosts.map((post) => (
                <div>
                  <Link className="posts" to={`/posts/${id}`}>
                    <b>Title:</b>
                    {post.title}
                  </Link>
                </div>
              ))
            : "No Posts"}
        </div>
      ) : (
        "User not found :/"
      )}
    </div>
  );
}

export default UserPosts;
