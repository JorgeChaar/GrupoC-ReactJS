import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {

	
	



	return (
		<li>
			<button  onClick={() => handleCompleteTodo(todo.id)}>Completada</button>
			<TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<button
				
				onClick={() => handleDeleteTodo(todo.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};
