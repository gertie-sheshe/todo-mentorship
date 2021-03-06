import {
  Grid,
  Button,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  Paper,
  TableCell,
} from "@material-ui/core";
import { connect } from "react-redux";
import { fetchTodos, fetchAllActive } from "../../redux/actions/todosAction";

import useStyles from "./useStyles";

const Todo = ({ fetchTodos, fetchAllActive, todos }) => {
  const classes = useStyles();
  console.log("TODOS", todos);

  return (
    <>
      <Grid className={classes.root}>
        <Button onClick={fetchTodos}>Test Action</Button>
        <Grid>
          <TableContainer component={Paper} className={classes.paper}>
            <Table className={classes.table}>
              <TableBody>
                {todos &&
                  todos.map((todo) => (
                    <TableRow key={todo.id}>
                      <TableCell component="th" scope="row">
                        {todo.name}
                      </TableCell>
                      <TableCell align="right">{todo.status}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid>
          <Button variant="contained" onClick={fetchTodos}>
            View All
          </Button>
          <Button variant="contained" onClick={fetchAllActive}>
            Active
          </Button>
          <Button variant="contained">Clear Completed</Button>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos,
});

export default connect(mapStateToProps, { fetchTodos, fetchAllActive })(Todo);
