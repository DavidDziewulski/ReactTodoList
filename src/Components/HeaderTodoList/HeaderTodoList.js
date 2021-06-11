import style from './HeaderTodoList.module.scss';
import ButtonRemoveAllTodos from '../ButtonRemoveAllTodos/ButtonRemoveAllTodos';
const HeaderTodoList = ({ allTodo, doneTodo, activeTodo, handleRemoveAllTodos }) => {
	return (
		<header className={style.header}>
			<h2 className={style.title}>All: {allTodo}</h2>
			<h2 className={style.title}>Active: {activeTodo}</h2>
			<h2 className={style.title}>Complited: {doneTodo}</h2>
			<ButtonRemoveAllTodos handleRemoveAllTodos={handleRemoveAllTodos} allTodo={allTodo} />
		</header>
	);
};

export default HeaderTodoList;
