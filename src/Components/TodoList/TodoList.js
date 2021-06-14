import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./TodoList.module.scss";
import HeaderTodoList from "../HeaderTodoList/HeaderTodoList";
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoTasks from "../TodoTasks/TodoTasks";
const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const handleRemoveAllTodos = () => setTodoList([]);
  const handleAddTodo = (newTodo) => {
    const isTheSameTodo = todoList.some(
      (todo) => todo.content === newTodo.content
    );
    if (isTheSameTodo) {
      return;
    }
    setTodoList([...todoList, newTodo]);
  };
  const handleRemoveTodo = (todoId) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
  };
  const handleDoneTodo = (todoId) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };
  const handleTodoByStatus = (todoStatus) => {
    switch (todoStatus) {
      case "done":
        return todoList.filter((todo) => todo.done).length;
      case "active":
        return todoList.length - todoList.filter((todo) => todo.done).length;
      default:
    }
  };
  return (
    <Router>
      <main className={style.container}>
        <HeaderTodoList
          allTodo={todoList.length}
          doneTodo={handleTodoByStatus("done")}
          activeTodo={handleTodoByStatus("active")}
          handleRemoveAllTodos={handleRemoveAllTodos}
        />
        <Switch>
          <Route path="/active">
            <TodoTasks
              status={"active"}
              todoList={todoList}
              handleDoneTodo={handleDoneTodo}
              handleRemoveTodo={handleRemoveTodo}
            />
          </Route>
          <Route path="/completed">
            <TodoTasks
              status={"completed"}
              todoList={todoList}
              handleDoneTodo={handleDoneTodo}
              handleRemoveTodo={handleRemoveTodo}
            />
          </Route>
          <Route path="/">
            <TodoTasks
              status={"all"}
              todoList={todoList}
              handleDoneTodo={handleDoneTodo}
              handleRemoveTodo={handleRemoveTodo}
            />
          </Route>
        </Switch>
        <CreateTodo handleAddTodo={handleAddTodo} />
      </main>
    </Router>
  );
};

export default TodoList;
