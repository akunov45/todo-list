import React from "react";
import "./TodoHeader.css";

const TodoHeader = ({ actTodo, doneCount }) => {
	return (
		<div className='d-flex'>
			<h1 className='h1 bgrandom'>Todo List</h1>
			<span className='span'>
				{actTodo} more todo,done {doneCount}
			</span>
		</div>
	);
};

export default TodoHeader;
