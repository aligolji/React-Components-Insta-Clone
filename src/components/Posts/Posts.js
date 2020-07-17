import React from "react";
import Post from "./Post";
import "./Posts.css";
import App from "../../App";



const Posts = (props) => {
  // console.log(props);
  // Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {
        posts.map(post => {
          // console.log(post)
          return <Post key={post.id} post={post} likePost={likePost} />
        })
      }


      {/* map through the posts here to return a Post component */}

      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;

//parent is Apps
//child is Post