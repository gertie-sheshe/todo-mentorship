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
import { createTodo, toggleTodoState } from "../../redux/actions/todosAction";

import useStyles from "./useStyles";

const Todo = ({
  fetchAllComplete,
  createTodo,
  toggleTodoState,
  todos,
  fetchAllActive,
}) => {
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

  const toggleTodo = (todo) => {
    toggleTodoState(todo);
  };

  return (
    <>
      <Grid className={classes.root}>
        <Grid container justify="center">
          <FormControl>
            <form onSubmit={newTodo}>
              <InputLabel htmlFor="todo-input">Add Todo</InputLabel>
              <Input
                id="todo-input"
                aria-describedby="todo-helper"
                value={todo}
                className={classes.input}
                onChange={(e) => setTodo(e.target.value)}
              ></Input>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
              >
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
                    <TableRow
                      className={
                        todo.completed ? classes.inactive : classes.active
                      }
                      onClick={() => toggleTodo(todo)}
                      key={todo.id}
                    >
                      <TableCell component="th" scope="row">
                        {todo.name}
                      </TableCell>
                      {todo.completed ? (
                        <TableCell align="right">inactive</TableCell>
                      ) : (
                        <TableCell align="right">active</TableCell>
                      )}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid>
          <Button
            className={classes.button}
            variant="contained"
            onClick={viewAll}
          >
            View All
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={filterActive}
          >
            Active
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={filterComplete}
          >
            Completed
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

export default connect(mapStateToProps, { createTodo, toggleTodoState })(Todo);
