import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

const SearchUser = ({ users }) => {
  const [filteredUsers, setfilteredUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const delayedQuery = useCallback(
    debounce((q, users) => {
      const usersList =
        users &&
        users.filter(user => user.name.toLowerCase().includes(q.toLowerCase()));
      setfilteredUsers(usersList);
    }, 500),
    []
  );

  const findUsers = e => {
    setShowUsers(!showUsers);
    delayedQuery(e.target.value, users);
  };

  const searchList = () =>
    filteredUsers.length ? (
      <ul className="search-result">
        {filteredUsers.map((user, index) => {
          return (
            <li key={user.id}>
              <Link
                to={{
                  pathname: `/user/${user.id}`,
                  state: {
                    user
                  }
                }}
              >
                {user.name}
              </Link>
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="no-search-result">
        <em>No Users!</em>
      </div>
    );

  return (
    <div className="search">
      <input
        type="text"
        className="search-box"
        onChange={findUsers}
        placeholder="Enter user name..."
      />
      {showUsers && searchList()}
    </div>
  );
};

export default SearchUser;
