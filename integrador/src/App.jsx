//import { useState } from 'react';
import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './forms/useTodo';

function App() {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		completeCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

	return (
		<>
			<div className='card-to-do'>
				<h1>Trabajo Integrador Grupo C </h1>
				
				<div className='counter-todos'>
					<h3>
						Tareas: <span>{todosCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTodosCount}</span>
					</h3>
					<h3>
						Completadas: <span>{completeCount}</span>
					</h3>
				</div>

				<div className='add-todo'>
					
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>

				<TodoList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			</div>
		</>
	);
}

export default App;
