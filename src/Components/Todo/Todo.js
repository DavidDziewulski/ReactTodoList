import c from "classnames";
import React from "react";
import TodoContent from "../TodoContent/TodoContent";
import ButtonRemoveTodo from "../ButtonRemoveTodo/ButtonRemoveTodo";
import styles from "./Todo.module.scss";

const Todo = ({ content, handleDoneTodo, handleRemoveTodo, done, id }) => {
  const maxLengthContent = 100;
  return (
    <li className={c(`${styles.wrapper}`, { [styles.isDone]: done })}>
      <input
        type="checkbox"
        onClick={() => handleDoneTodo(id)}
        className={styles.btn}
        name="checked"
        value="done"
        id={id}
      />

      <TodoContent
        content={content}
        maxLengthContent={maxLengthContent}
        id={id}
      />

      <ButtonRemoveTodo handleRemoveTodo={handleRemoveTodo} id={id} />
    </li>
  );
};

export default Todo;
