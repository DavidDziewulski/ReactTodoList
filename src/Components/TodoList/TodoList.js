import React, { useState } from "react";
import style from "./TodoList.module.scss";
import HeaderTodoList from "../HeaderTodoList/HeaderTodoList";
import CreateTodo from "../CreateTodo/CreateTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.scss";
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
    <main className={style.container}>
      <HeaderTodoList
        allTodo={todoList.length}
        doneTodo={handleTodoByStatus("done")}
        activeTodo={handleTodoByStatus("active")}
        handleRemoveAllTodos={handleRemoveAllTodos}
      />
      {todoList.length > 0 && (
        <ol className={styles.todos}>
          {todoList.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              content={todo.content}
              handleDoneTodo={handleDoneTodo}
              handleRemoveTodo={handleRemoveTodo}
              done={todo.done}
            />
          ))}
        </ol>
      )}
      <CreateTodo handleAddTodo={handleAddTodo} />
    </main>
  );
};

export default TodoList;
