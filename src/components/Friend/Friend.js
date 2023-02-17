import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { name, email, username, id } = friend;
  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>
        <Link to={`/friend/:${id}`}>{username}</Link>
      </p>
    </div>
  );
};

export default Friend;
