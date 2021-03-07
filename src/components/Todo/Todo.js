import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  Paper,
  TableCell,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  fetchtActiveTodos,
  clearCompleteTodos,
  fetchTodos,
} from "../../redux/selectors/todosSelector";
import { createTodo } from "../../redux/actions/todosAction";

import useStyles from "./useStyles";

const Todo = ({ fetchAllComplete, createTodo, todos, fetchAllActive }) => {
  const classes = useStyles();
  const [todosArr, setTodos] = useState(todos);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    setTodos(todos);
  }, [todos]);

  const filterComplete = () => {
    setTodos(fetchAllComplete);
  };
  const filterActive = () => {
    setTodos(fetchAllActive);
  };

  const viewAll = () => {
    setTodos(todos);
  };

  const newTodo = (e) => {
    e.preventDefault();
    createTodo(todo);
  };

  return (
    <>
      <Grid className={classes.root}>
        <Grid>
          <FormControl>
            <form onSubmit={newTodo}>
              <InputLabel htmlFor="todo-input">Add Todo</InputLabel>
              <Input
                id="todo-input"
                aria-describedby="todo-helper"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              ></Input>
              <Button type="submit" variant="contained">
                Add
              </Button>
            </form>
          </FormControl>
        </Grid>
        <Grid>
          <TableContainer component={Paper} className={classes.paper}>
            <Table className={classes.table}>
              <TableBody>
                {todosArr &&
                  todosArr.map((todo) => (
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
          <Button variant="contained" onClick={viewAll}>
            View All
          </Button>
          <Button variant="contained" onClick={filterActive}>
            Active
          </Button>
          <Button variant="contained" onClick={filterComplete}>
            Clear Completed
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  fetchAllActive: fetchtActiveTodos,
  fetchAllComplete: clearCompleteTodos,
  todos: fetchTodos,
});

export default connect(mapStateToProps, { createTodo })(Todo);
