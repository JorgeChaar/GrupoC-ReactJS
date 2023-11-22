import React, { Fragment } from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({
	todos,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<Fragment>
			<h2 >Listado:</h2>
		<ul>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			))}
		</ul>
		</Fragment>
	);
};
