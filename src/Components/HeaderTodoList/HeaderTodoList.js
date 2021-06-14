import style from "./HeaderTodoList.module.scss";
import ButtonRemoveAllTodos from "../ButtonRemoveAllTodos/ButtonRemoveAllTodos";
import { Link } from "react-router-dom";
const HeaderTodoList = ({
  allTodo,
  doneTodo,
  activeTodo,
  handleRemoveAllTodos,
}) => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.link}>
          <Link className={style.title} to="/" exact={true}>
            All: {allTodo}
          </Link>
        </li>
        <li className={style.link}>
          <Link className={style.title} to="/active">
            Active: {activeTodo}
          </Link>
        </li>
        <li className={style.link}>
          <Link className={style.title} to="/completed">
            Completed: {doneTodo}
          </Link>
        </li>
      </ul>
      <ButtonRemoveAllTodos
        handleRemoveAllTodos={handleRemoveAllTodos}
        allTodo={allTodo}
      />
    </nav>
  );
};

export default HeaderTodoList;
