import c from 'classnames';
import style from './ButtonRemoveAllTodos.module.scss';
const ButtonRemoveAllTodos = ({ handleRemoveAllTodos, allTodo }) => (
	<button
		className={c(`${style.normal}`, { [`${style.active}`]: !!allTodo })}
		disabled={!allTodo}
		type="reset"
		onClick={handleRemoveAllTodos}
		aria-label="remove all todo"
	>
		All remove
	</button>
);

export default ButtonRemoveAllTodos;
