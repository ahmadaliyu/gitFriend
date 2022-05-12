import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  FormControl,
  Button,
  CircularProgress,
  Modal,
} from "@material-ui/core";
import { useStyles } from "../styles/searchuser.styles";
import { useDispatch } from "react-redux";
import {
  useFetchOrganizationsMutation,
  useFetchReposMutation,
} from "../redux/services/apiService";
// import { useHistory } from "react-router-dom";
// import Header from "../Header";

const SearchUser = (props) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  // const history = useHistory();
  const [username, setUsername] = useState("");
  const [showAction, setShowAction] = useState("repos");
  const [showModal, setShowModal] = useState(false);

  const [
    fetchRepos,
    { isLoading: loadingRepos, data: repos },
  ] = useFetchReposMutation();
  const [
    fetchOrganizations,
    { isLoading: loadingOrgs, data: organizations, isFetching },
  ] = useFetchOrganizationsMutation();

  // console.log(3333, organizations);
  console.log(444, repos);

  const inputRef = useRef();
  const submitBtn = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeHandler = (e) => setUsername(e.target.value);

  const handleSearchRepo = async () => {
    await fetchRepos(username)
      .unwrap()
      .then((res) => {
        if (res.data) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSearchOrganizations = async (e) => {
    await fetchOrganizations(username)
      .unwrap()
      .then((res) => {
        if (res.data) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.name === "email" && submitBtn.current.focus();
    }
  };

  return (
    <>
      <div>
        {showAction === "repos" ? (
          <h3>Find your github repositories</h3>
        ) : (
          <h3>Find your github Organizations</h3>
        )}
      </div>
      <div className={classes.btnGroup}>
        <Button
          onClick={() => setShowAction("repos")}
          className={classes.btn1}
          variant="contained"
          color="primary"
        >
          Repos
        </Button>
        <Button
          onClick={() => setShowAction("orgs")}
          className="btn2"
          variant="contained"
          color="secondary"
        >
          Organizations
        </Button>
      </div>
      <FormControl className={classes.searchForm}>
        {/* <Header /> */}

        <Box className={classes.inputContainer}>
          <input
            type="email"
            name="email"
            ref={inputRef}
            className="username"
            onKeyDown={handleKeyDown}
            placeholder="Enter GitHub Username"
            value={username}
            onChange={onChangeHandler}
          />
          <Button
            // key={}
            disabled={username.length === 0}
            className={classes.btn}
            variant="contained"
            color="primary"
            name="Submit"
            ref={submitBtn}
            onClick={
              showAction === "repos"
                ? handleSearchRepo
                : handleSearchOrganizations
            }
          >
            Search
            {loadingRepos && (
              <CircularProgress
                size={"15px"}
                className="loader"
                color="inherit"
              />
            )}
            {loadingOrgs && (
              <CircularProgress
                size={"15px"}
                className="loader"
                color="inherit"
              />
            )}
          </Button>
        </Box>
      </FormControl>
    </>
  );
};

export default SearchUser;
