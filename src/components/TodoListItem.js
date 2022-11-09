import './TodoListItem.css'
const TodoListItem = props => {
	// props = {
	// task:"LEARN HTML CSS",
	// day: 30
	// }
	return (
		<span className="d-flex">
            <span className="todo-name">
			{props.task}
            </span>
            <button className="btn btn-outline-danger">
            <i class="bi bi-trash3"></i>
            </button>
            <button className="btn btn-outline-warning">
            <i class="bi bi-exclamation-square"></i>
            </button>

		</span>
	);
};

export default TodoListItem;

