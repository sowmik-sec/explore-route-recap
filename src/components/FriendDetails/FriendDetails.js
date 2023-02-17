import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  const { name, email } = friend;
  console.log(friend);
  return (
    <div>
      <h2>Friend detail page</h2>
      <h2>Everything you need to know about this fake friends</h2>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default FriendDetails;
