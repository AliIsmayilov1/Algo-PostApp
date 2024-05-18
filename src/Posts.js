import { useEffect, useState } from "react"
import "./posts.css"
import { Link } from "react-router-dom"


function Posts() {
    let [postList, setPostList] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                setPostList(data)
            })
            .catch((error) =>  console.log({ error }) )
    }, [])
    return (
        <div>
            {postList.length ? postList.map((post) => <div> <Link to={`/posts/${post.id}`} className="posts"><b>Title: </b>{post.title}</Link></div>) : "Empty.."}
        </div>
    )
}


export default Posts;