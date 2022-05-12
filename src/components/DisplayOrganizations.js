import React from "react";
import { useLocation } from "react-router-dom";

function DisplayOrganizations() {
  let location = useLocation();
  const organizations = location.state.orgs;
  //   console.log(66, location.state.repo);

  return (
    <div style={{ margin: "5%" }}>
      <h3>Your Organizations</h3>
      {Array.isArray(organizations) === true && organizations.length === 0 && (
        <p>You don't belong to any Organization</p>
      )}
      {Array.isArray(organizations) === true && (
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
          {organizations.map((orgs) => (
            <li key={orgs.id}>{orgs.name}</li>
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

export default DisplayOrganizations;
