import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./PostDetails.css"


function PostDetails() {
    let params = useParams()
    let { id } = params
    let [post, setPost] = useState(null);
    let [isLoading, setIsLoading] = useState(false)
    let [user, setUser] = useState(null)
    let [userLoading, setUserLoading] = useState(false)
    let [postComment, setPostComment] = useState([])
    let [commentLoading, setCommentLoading] = useState(false)

    useEffect(() => {
        if (post) {
            setCommentLoading(true)
            fetch(`https://jsonplaceholder.typicode.com/comments`, { method: "GET" })
                .then((res) => res.json())
                .then((data) => {
                    let foundComment = data.filter((comment) => {
                        return comment.postId === post.id

                    })
                    if (!isEmpty(foundComment)) {
                        setPostComment(foundComment)
                    }
                    setCommentLoading(false)
                })
                .catch((error) => {
                    console.log({ error });
                    setCommentLoading(false)
                })
        }
    }, [post])


    useEffect(() => {
        if (post) {
            setUserLoading(true)
            fetch(`https://jsonplaceholder.typicode.com/users`, { method: "GET" })
                .then((res) => res.json())
                .then((data) => {
                    let foundUser = data.find((user) => {
                        return user.id === post.userId

                    })
                    if (!isEmpty(foundUser)) {
                        setUser(foundUser)
                    }
                    setUserLoading(false)
                })
                .catch((error) => {
                    console.log({ error });
                    setUserLoading(false)
                })
        }
    }, [post])

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                if (!isEmpty(data)) {
                    setPost(data)
                }
                setIsLoading(false)
            })
            .catch((error) => {
                console.log({ error });
                setIsLoading(false)
            })
    }, [])

    return (<div>
        {isLoading ? "Loading..." : post ? <div><b>User:</b>{userLoading ? "Loading..." : user ? user.name : "User not found :/"}<br></br><b>Title:</b>{post.title}<br /><b>Body:</b>{post.body}<br></br><b>Comments:</b><br></br>{commentLoading ? "Loading..." : postComment.map((comment) => <div className="commentContainer"><b>Name</b>{comment.name}v<br></br><b>Email:</b>{comment.email}<br></br><b>Body:</b>{comment.body}</div>) }</div> : "Post not found :/"}
    </div>);
}

export default PostDetails;