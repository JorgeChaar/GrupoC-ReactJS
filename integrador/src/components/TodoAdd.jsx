import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return; //valido que haya 2 caracteres como minimo

		
		let newTodo = {
			id: new Date().getTime(), // a la nueva tarea le asigno un id (fechaHora)
			description: description,
			done: false,
		};

		handleNewTodo(newTodo); // 
		onResetForm();
	};

	return (
		// 
		<form onSubmit={onFormSubmit}> 
			<input
				type='text'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='Ingrese una nueva tarea'
			/>

			<button  type='submit'>
				+
			</button>
		</form>
	);
};
