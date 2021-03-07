import Todo from "../Todo/Todo";
import { Grid } from "@material-ui/core";

import useStyles from "./useStyles";

function App() {
  const classes = useStyles();

  return (
    <>
      <Grid className={`${classes.root} ${classes.bgroundTop}`}></Grid>
      <Todo />
      <Grid className={classes.bgroundBottom}></Grid>
    </>
  );
}

export default App;
