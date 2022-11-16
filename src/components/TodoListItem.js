import "./TodoListItem.css";
const TodoListItem = props => {
	const { done, important } = props;

	let clazz = "todo-name";

	if (done) {
		clazz += "done";
	}
	if (important) {
		clazz += "important";
	}
	const { onColor, onDone, onDelete, id } = props;
	return (
		<span className='d-flex'>
			<span className={clazz} onClick={() => onDone(id)}>
				{props.task}
			</span>
			<button className='btn btn-outline-danger' onClick={() => onDelete(id)}>
				<i className='bi bi-trash3'></i>
			</button>
			<button className='btn btn-outline-warning' onClick={() => onColor(id)}>
				<i className='bi bi-exclamation-square'></i>
			</button>
		</span>
	);
};

export default TodoListItem;
