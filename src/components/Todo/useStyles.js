import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#25283c",
    height: "300px",
    top: "20%",
    position: "absolute",
    width: "50vw",
    left: 0,
    right: 0,
    margin: "auto",
  },
  table: {
    minWidth: "200px",
  },
  paper: {
    marginBottom: "40px",
    marginTop: "20px",
  },
  button: {
    marginLeft: "10px",
  },
  input: {
    backgroundColor: "white",
  },
  active: {},
  inactive: {
    backgroundColor: "gray",
    textDecoration: "line-through",
  },
});

export default useStyles;
