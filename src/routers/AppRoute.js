import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@material-ui/core";
import SearchUser from "../components/SearchUser";
import PageNotFound from "../components/PageNotFound";
import DisplayGithubUserRepo from "../components/DisplayUserRepos";
import App from "../App";
import DisplayOrganizations from "../components/DisplayOrganizations";

const Approutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user-repositories" element={<DisplayGithubUserRepo />} />
        <Route path="/user-organizations" element={<DisplayOrganizations />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
