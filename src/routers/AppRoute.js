import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@material-ui/core";
import SearchUser from "../components/SearchUser";
import PageNotFound from "../components/PageNotFound";
import DisplayGithubUserRepo from "../components/DisplayUserRepos";

const Approutes = (props) => {
  return (
    <BrowserRouter>
      <Box className={"box"}>
        <Routes>
          <Route path="/" component={SearchUser} exact={true} />
          <Route
            path="/displayuserrepo/:uname"
            component={DisplayGithubUserRepo}
            strict
            exact={true}
          />
          <Route path="/*" component={PageNotFound} strict exact={true} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default Approutes;
