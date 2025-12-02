import React from "react";
import PostService from "../service/post";
import Posts from "../components/Posts";

const AllPosts = ({ postService }) => (
  <Posts postService={postService} addable={true} />
);

export default AllPosts;
