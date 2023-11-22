import { useState } from 'react';

export const useForm = (initialForm = {}) => {

	const [formState, setFormState] = useState(initialForm);

	const onInputChange = e => {
		const name = e.target.name;
		const value = e.target.value;

		setFormState({
			...formState, //traigo los valores actuales
			[name]: value, //le asigno el nuevo valor
		});
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};
