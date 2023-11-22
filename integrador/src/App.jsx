
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
			<div >
				<h1>Trabajo Integrador Grupo C </h1>
				
				<div >
					<h3>
						Cantidad de Tareas: <span>{todosCount}</span>
					</h3>
					<h3>
						Tareas Pendientes: <span>{pendingTodosCount}</span>
					</h3>
					<h3>
						Tareas Completadas: <span>{completeCount}</span>
					</h3>
				</div>

				<div >
					
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
