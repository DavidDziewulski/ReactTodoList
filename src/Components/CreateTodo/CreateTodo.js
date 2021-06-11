import React from 'react';
// import uuid from 'uuid';
import { v1 as uuid } from 'uuid';
import styles from './CreateTodo.module.scss';
const CreateTodo = ({ handleAddTodo }) => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
		const todo = {
			content: String(e.target.todo.value).trim(),
			author: String('Dawid'),
			done: Boolean(false),
			likes: Number(0),
			dislikes: Number(0),
			id: uuid()
		};
		if (!todo.content) {
			e.target.todo.value = '';
			return;
		} else {
			handleAddTodo(todo);
			e.target.todo.value = '';
		}
	};
	return (
		<form onSubmit={handleFormSubmit} className={styles.addTodo}>
			<input className={styles.text} type="text" name="addTodo" id="todo" placeholder="What needs to be done" />
			<label htmlFor="todo" className={styles.visuallyHidden}>
				{' '}
				What needs to be done?{' '}
			</label>
		</form>
	);
};

export default CreateTodo;
