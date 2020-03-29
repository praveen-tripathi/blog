import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const UserDetails = () => {
  let history = useHistory();
  let location = useLocation();
  const { user } = location.state;

  return (
    <div className="user-details-container">
      <button className="btn" onClick={history.goBack}>
        Go Back
      </button>
      <div className="user-details">
        <div className="user-meta">Username: {user.username}</div>
        <div className="user-meta">Full Name: {user.name}</div>
        <div className="user-meta">Email: {user.email}</div>
        <div className="user-meta">Website: {user.website}</div>
        <div className="user-meta">
          Company Details: <br />
          <div className="company-meta">Name: {user.company.name}</div>
          <div className="company-meta">Phrase: {user.company.catchPhrase}</div>
          <div className="company-meta">BS: {user.company.bs}</div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
