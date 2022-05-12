import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  mainContainer: {
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    // backgroundImage: `url(${})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  searchForm: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    borderRadius: "20px",
    height: "25vh",
    padding: "5vh 15vw",
    paddingTop: "10vh",
  },

  inputContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "90%",
    height: "50%",
    marginTop: "3vh",
  },
  btn: {
    padding: "0.5vh 4.5vw",
    marginTop: "3vh",
  },
  btnGroup: {
    padding: "2.5vh 4.5vw",
    marginTop: "3vh",
  },
  btn1: {
    margin: "1vw",
  },
});
