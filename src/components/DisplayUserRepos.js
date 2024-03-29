import React from "react";
import { useLocation } from "react-router-dom";

function DisplayUserRepos() {
  let location = useLocation();
  const repositories = location.state.repo;
  //   console.log(66, location.state.repo);

  return (
    <div style={{ margin: "5%" }}>
      <h3>Your repositories</h3>
      {Array.isArray(repositories) === true && repositories.length === 0 && (
        <h4>You don't have any repository</h4>
      )}
      {Array.isArray(repositories) === true && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            height: "50%",
            top: "10%",
            right: "40%",
          }}
        >
          {repositories.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </div>
      )}
      <a
        className="App-link"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Back to search
      </a>
    </div>
  );
}

export default DisplayUserRepos;
