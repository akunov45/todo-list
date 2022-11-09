import './AddTodo.css'
const AddTodo = props => {
	return (
		<div className="d-flex add-form">
			<input className="add-input" type="text" placeholder='Введите задачу' />
			<button className="btn btn-success">{props.btnName}</button>
		</div>
	);
};

export default AddTodo;
