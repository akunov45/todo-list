import React from "react";
import "./SearchTodo.css";

const SearchTodo = ({ onSeacrh }) => {
	const onChangeText = event => {
		onSeacrh(event.target.value);
	};
	return (
		<div className='input-group'>
			<input
				type='text'
				onChange={onChangeText}
				className='form'
				placeholder='Поиск'
			/>
		</div>
	);
};

export default SearchTodo;
