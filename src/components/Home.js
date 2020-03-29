import React, { useEffect, useState } from "react";
import PostList from "./PostList";
import SearchUser from "./SearchUser";

const Home = () => {
  const [posts, setPostData] = useState([]);
  const [users, setUserData] = useState([]);
  const [postFetchError, setPostFetchError] = useState(false);
  const [userFetchError, setUserFetchError] = useState(false);

  const fetchUsers = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => response.json())
      .then(response => setUserData(response))
      .catch(err => setUserFetchError(err));
  };

  const fetchPostData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(response => setPostData(response))
      .catch(err => setPostFetchError(err));
  };

  useEffect(() => {
    fetchPostData();
    fetchUsers();
  }, []);

  const hasFetchError = userFetchError || postFetchError;

  return (
    <div className="container">
      <SearchUser users={users} />
      {hasFetchError ? (
        <div className="error">Error while fetching posts...</div>
      ) : !posts.length || !users.length ? (
        "Posts Loading..."
      ) : (
        <PostList posts={posts} users={users} />
      )}
    </div>
  );
};

export default Home;
