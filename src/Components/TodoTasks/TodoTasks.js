import Todo from "../Todo/Todo";
import styles from "./TodoTasks.module.scss";
const TodoTasks = ({ status, todoList, handleDoneTodo, handleRemoveTodo }) => (
  <ol className={styles.ol}>
    {todoList.map((todo) => {
      if (status === "active" && todo.done === false) {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            handleDoneTodo={handleDoneTodo}
            handleRemoveTodo={handleRemoveTodo}
            done={todo.done}
          />
        );
      } else if (status === "completed" && todo.done === true) {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            handleDoneTodo={handleDoneTodo}
            handleRemoveTodo={handleRemoveTodo}
            done={todo.done}
          />
        );
      } else if (status === "all") {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            handleDoneTodo={handleDoneTodo}
            handleRemoveTodo={handleRemoveTodo}
            done={todo.done}
          />
        );
      }
    })}
  </ol>
);

export default TodoTasks;
